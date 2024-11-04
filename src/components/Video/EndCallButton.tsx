import { Button, Modal } from "antd";
import { useState } from "react";
import { PhoneOutlined } from "@ant-design/icons";

interface EndCallButtonProps {
  onEndCall: () => void;
}

export default function EndCallButton({ onEndCall }: EndCallButtonProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onEndCall();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        danger
        icon={<PhoneOutlined />}
        onClick={showModal}
      >
        End Call
      </Button>
      <Modal
        title="Confirm End Call"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="End Call"
        okButtonProps={{ danger: true }}
        cancelText="Cancel"
      >
        Are you sure you want to end the call?
      </Modal>
    </>
  );
}
