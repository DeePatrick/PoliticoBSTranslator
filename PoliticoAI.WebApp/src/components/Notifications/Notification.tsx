import { useState } from "react";
import Toast from "react-bootstrap/Toast";

export interface CustomNotificationProps {
  data: {
    id: symbol;
    text: string;
  };
  style:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClose: () => void;
}

const CustomNotification = (props: CustomNotificationProps) => {
  const { data, onClose, style } = props,
    [show, setShow] = useState(true),
    handleClose = () => {
      setShow(false);
      onClose();
    };

  return (
    <Toast show={show} onClose={handleClose} bg={style}>
      <Toast.Header>
        <strong className="me-auto">AP Installation Downloader</strong>
      </Toast.Header>
      <Toast.Body>{data.text}</Toast.Body>
    </Toast>
  );
};

export default CustomNotification;
