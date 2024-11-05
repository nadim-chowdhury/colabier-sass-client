"use client";

import { useState } from "react";
import { Button, Input, List, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

interface Comment {
  id: string;
  author: string;
  content: string;
}

export default function CommentsPanel() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Math.random().toString(36).substring(7),
          author: "You",
          content: newComment,
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-full flex flex-col">
      <Title level={4}>Comments</Title>
      <div className="flex-1 overflow-y-auto mt-4">
        <List
          dataSource={comments}
          renderItem={(comment) => (
            <List.Item>
              <Typography.Text strong>{comment.author}:</Typography.Text>
              <Typography.Text className="ml-2">
                {comment.content}
              </Typography.Text>
            </List.Item>
          )}
        />
      </div>
      <div className="mt-4">
        <TextArea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          autoSize={{ minRows: 2 }}
        />
        <Button type="primary" onClick={handleAddComment} className="mt-2">
          Add Comment
        </Button>
      </div>
    </div>
  );
}
