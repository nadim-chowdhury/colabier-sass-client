import { Typography, Input, Button, Tag, List } from "antd";
import { useState } from "react";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  comments: Comment[];
}

interface TaskDetailsProps {
  task: Task;
  onUpdateTask: (updatedTask: Task) => void;
}

export default function TaskDetails({ task, onUpdateTask }: TaskDetailsProps) {
  const [editedTask, setEditedTask] = useState(task);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const updatedComments = [
        ...editedTask.comments,
        {
          id: Date.now().toString(),
          user: "CurrentUser",
          text: newComment,
          timestamp: new Date().toLocaleString(),
        },
      ];
      setEditedTask({ ...editedTask, comments: updatedComments });
      setNewComment("");
      onUpdateTask({ ...editedTask, comments: updatedComments });
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Task Information */}
      <Title level={4}>{editedTask.title}</Title>
      <TextArea
        value={editedTask.description}
        onChange={(e) =>
          setEditedTask({ ...editedTask, description: e.target.value })
        }
        placeholder="Task description..."
        className="mb-4"
        rows={4}
      />
      <div className="flex items-center space-x-4 mb-4">
        <Tag
          color={
            editedTask.priority === "High"
              ? "red"
              : editedTask.priority === "Medium"
              ? "orange"
              : "green"
          }
        >
          {editedTask.priority}
        </Tag>
        <Text type="secondary">Due: {editedTask.dueDate}</Text>
      </div>

      {/* Comments Section */}
      <Title level={5} className="mt-4">
        Comments
      </Title>
      <List
        dataSource={editedTask.comments}
        renderItem={(comment) => (
          <List.Item key={comment.id}>
            <Text strong>{comment.user}</Text>
            <Text type="secondary" className="text-xs ml-2">
              {comment.timestamp}
            </Text>
            <p>{comment.text}</p>
          </List.Item>
        )}
      />

      <Input
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onPressEnter={handleCommentSubmit}
        className="mt-2"
      />
      <Button
        type="primary"
        onClick={handleCommentSubmit}
        className="mt-2 bg-cyan-600 hover:bg-cyan-700"
      >
        Add Comment
      </Button>
    </div>
  );
}
