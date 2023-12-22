export default function Sidebar({ userImg, userName, children }) {
  return (
    <div className="sidebar hidden md:block    right-0.5  max-h-[calc(100vh)] overflow-y-hidden     min-w-[20%] max-w-[25%] rounded-2xl    ">
      <div className="user-info flex justify-start gap-2  rounded-t-2xl p-2 items-center w-100  bg-[#51ACD0] ">
        <div className="w-6 h-6  rounded-full  ">
          <img
            src={userImg}
            alt="notFound"
            className="w-100 h-100 rounded-full "
          />
        </div>
        <div className="userName  font-medium text-[14px]  ">
          <p>مرحبا:{userName}</p>
        </div>
      </div>
      <div className="nav--lists__holder flex max-h-[85vh] overflow-y-scroll  flex-col p-2   items-center  gap-5 ">
        {children}
      </div>
    </div>
  );
}
