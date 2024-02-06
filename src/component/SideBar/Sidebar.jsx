export default function Sidebar({ side, userImg, userName, children }) {
  return (
    <div
      className={
        side == true
          ? 'sidebar absolute z-30 bg-slate-200   md:relative       md:flex flex-col  h-[calc(100vh-(5.3rem))] rounded-2xl'
          : 'sidebar absolute z-30 bg-slate-200   md:relative  mt-3  md:flex flex-col  h-[calc(100vh-(5.3rem))] rounded-2xl hidden'
      }
    >
      <div className="user-info flex justify-start gap-2 h-[5%] py-1  rounded-t-2xl  px-3 items-center w-full  bg-main ">
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
      <div className="nav--lists__holder  h-[89vh] bg-slate-100   md:h-full overflow-y-scroll   flex-col p-2   items-center  gap-5 ">
        {children}
      </div>
    </div>
  );
}
