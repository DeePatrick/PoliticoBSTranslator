import ToastContainer from "react-bootstrap/ToastContainer";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import Notification from "./Notification";
import { removeNotification } from "../../slices/notificationSlice";

const Notifications = () => {
  const dispatch = useAppDispatch(),
    { notifications } = useAppSelector((state) => state.notification);

  return (
    <ToastContainer
      className="position-static p-3"
      position="bottom-end"
      style={{ zIndex: 100 }}
    >
      {notifications.map((t) => (
        <Notification
          key={t.id.description}
          style={t.theme}
          data={t}
          onClose={() => dispatch(removeNotification(t.id))}
        />
      ))}
    </ToastContainer>
  );
};

export default Notifications;
