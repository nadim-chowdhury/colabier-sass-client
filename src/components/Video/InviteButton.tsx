import { Button, message } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

export default function InviteButton() {
  const handleInvite = () => {
    const inviteLink = `${window.location.origin}/meeting/${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        message.success("Invite link copied to clipboard!");
      })
      .catch(() => {
        message.error("Failed to copy invite link.");
      });
  };

  return (
    <Button type="primary" icon={<ShareAltOutlined />} onClick={handleInvite}>
      Invite
    </Button>
  );
}
