import { useNotification } from "../../hook";
import { Toast } from "react-bootstrap";

export const NotificationToast = ({ text }) => {
  const { showToast, setShowToast, toastMessage, bgToast } = useNotification();

  return (
    <div className="container-notification">
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        bg={bgToast}
        autohide>
        <Toast.Header>
          <strong className="me-auto">{text}</strong>
        </Toast.Header>
        <Toast.Body>¡{toastMessage}!</Toast.Body>
      </Toast>
    </div>
  );
};
