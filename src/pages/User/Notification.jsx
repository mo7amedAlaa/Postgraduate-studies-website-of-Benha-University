// Notifications.js
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../Redux/Slices/notificationsSlice';

function Notifications({ notifications }) {
  const dispatch = useDispatch();
  return (
    <div className="notification-dropdown absolute top-[65%]  z-50 left-36  w-96    bg-white border-2   shadow-2xl  border-main border-solid     h-96   overflow-y-scroll rounded-md                ">
      {notifications.length === 0 ? (
        <p
          className=" p-3 border-b
        border-[#eee] border-solid "
        >
          No new notifications
        </p>
      ) : (
        <ul className="p-2">
          <h2 className="flex items-center justify-center">
            <button onClick={() => dispatch(deleteNotification('student'))}>
              <MdDeleteForever /> مسح الكل{' '}
            </button>
          </h2>
          {notifications.map((notification, index) => (
            <li
              key={index}
              className={`notification-item p-3 border-b
              border-[#eee] border-solid   last:border-none     ${notification.type}`}
            >
              {notification.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
