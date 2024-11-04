import { useState } from "react";
import { List, Avatar, Input, Button, Typography } from "antd";

const { Text } = Typography;
const { TextArea } = Input;

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

interface TaskCommentsProps {
  comments: Comment[];
  onAddComment: (comment: Comment) => void;
}

export default function TaskComments({
  comments,
  onAddComment,
}: TaskCommentsProps) {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        user: "CurrentUser", // Replace with actual user data
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };
      onAddComment(comment);
      setNewComment("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Text className="text-lg font-semibold">Comments</Text>
      <List
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item key={comment.id}>
            <List.Item.Meta
              avatar={<Avatar>{comment.user.charAt(0)}</Avatar>}
              title={comment.user}
              description={comment.timestamp}
            />
            <Text>{comment.text}</Text>
          </List.Item>
        )}
        className="mt-4"
      />
      <div className="mt-4">
        <TextArea
          rows={2}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <Button
          type="primary"
          onClick={handleAddComment}
          className="mt-2 bg-cyan-600 hover:bg-cyan-700"
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
}
