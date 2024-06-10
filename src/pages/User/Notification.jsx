// Notifications.js

function Notifications({ notifications }) {
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
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
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
