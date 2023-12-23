import { useState } from "react";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
export default function LinksGroup({ title, item1, item2, item3, item4 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="Card w-full ">
      <div className="head w-full flex justify-between rounded-b-lg rounded-t-md  px-5 py-1  items-center w-100  shadow-[inset_0_-1px_3px_rgba(0,0,0,0.4),inset_0_-1px_3px_rgba(0,0,0,0.4)] bg-[#51ACD0]">
        <p className="font-semibold  text-black text-[18px] ">{title}</p>
        <button
          onClick={() => {
            setOpen(!open);
            console.log(element1, element2, element3);
          }}
        >
          {open == true ? (
            <HiArrowSmUp fontSize={"28px"} />
          ) : (
            <HiArrowSmDown fontSize={"28px"} />
          )}
        </button>
      </div>
      <div className="links flex flex-wrap flex-col  items-start ps-10 py-3 text-[16px]  leading-relaxed  tracking-tighter   ">
        {/* دى حاجة static لغاية ميجلنا api يحمص*/}
        <div className="flex flex-col">
          <a href="/" className="text-green-400 mb-2">
            {item1}
          </a>
          <a href="/">{item2}</a>
          <a href="/">{item3}</a>
          <a href="/">{item4}</a>
        </div>
      </div>
    </div>
  );
}
