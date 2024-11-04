"use client";

import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulate login process
    setTimeout(() => {
      console.log("Logged in:", values);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <Title level={3} className="text-center text-cyan-700">
          Login to Your Account
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
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

          <div className="flex justify-between items-center mb-4">
            <Text className="text-gray-600">
              <Link href="/forgot-password">
                <span className="hover:underline">Forgot Password?</span>
              </Link>
            </Text>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <Text className="text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-cyan-700 hover:underline">Register now</span>
          </Link>
        </Text>
      </div>
    </div>
  );
}
