export default function Sidebar({ userImg, userName, children }) {
  return (
    <div className="sidebar  hidden md:flex flex-col  h-[calc(100vh-(5rem+.75rem))] rounded-2xl ">
      <div className="user-info flex justify-start gap-2  rounded-t-2xl p-2 items-center w-full  bg-[#51ACD0] ">
        <div className="w-6 h-6  rounded-full  ">
          <img
            src={userImg}
            alt="notFound"
            className="w-100 h-100 rounded-full "
          />
        </div>
        <div className="userName ">
          <p>مرحبا:{userName}</p>
        </div>
      </div>
      <div className="nav--lists__holder  h-full overflow-y-scroll   flex-col p-2   items-center  gap-5 ">
        {children}
      </div>
    </div>
  );
}
