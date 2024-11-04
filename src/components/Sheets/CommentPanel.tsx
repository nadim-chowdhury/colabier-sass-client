import { useState } from "react";
import { Input, Button, List, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

interface Comment {
  id: string;
  author: string;
  content: string;
}

interface CommentPanelProps {
  comments: Comment[];
  onAddComment: (comment: string) => void;
}

export default function CommentPanel({
  comments,
  onAddComment,
}: CommentPanelProps) {
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Title level={5}>Comments</Title>
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
      <TextArea
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="mt-2"
        autoSize={{ minRows: 2 }}
      />
      <Button type="primary" onClick={handleAddComment} className="mt-2">
        Add Comment
      </Button>
    </div>
  );
}
