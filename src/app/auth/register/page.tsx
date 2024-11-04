"use client";

import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulate registration process
    setTimeout(() => {
      console.log("Registered:", values);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <Title level={3} className="text-center text-cyan-700">
          Create a New Account
        </Title>
        <Form name="register" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700"
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <Text className="text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-cyan-700 hover:underline">Login here</span>
          </Link>
        </Text>
      </div>
    </div>
  );
}
