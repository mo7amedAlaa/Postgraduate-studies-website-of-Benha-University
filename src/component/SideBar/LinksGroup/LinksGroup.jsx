import { useState } from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function LinksGroup({ title, links }) {
  const [open, setOpen] = useState(true);
  function handlClose() {
    console.log('ddd');
  }
  return (
    <div className="Card w-full ">
      <div className="head w-full flex justify-between rounded-b-lg rounded-t-md  px-5 py-1  items-center w-100  shadow-[inset_0_-1px_3px_rgba(0,0,0,0.4),inset_0_-1px_3px_rgba(0,0,0,0.4)] bg-[#51ACD0]">
        <p className="font-semibold  text-black text-[18px] ">{title} </p>
        <button
          onClick={() => {
            handlClose();
            setOpen(!open);
          }}
        >
          {open == true ? (
            <HiArrowSmUp fontSize={'28px'} />
          ) : (
            <HiArrowSmDown fontSize={'28px'} />
          )}
        </button>
      </div>
      {open == true ? (
        <div className="links flex flex-wrap flex-col  items-start ps-10 py-3 text-[16px]  leading-relaxed  tracking-tighter   ">
          <div className="flex flex-col">
            {links.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                className={link.current ? 'text-green-500  ' : null}
              >
                {link.Ltitle}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
