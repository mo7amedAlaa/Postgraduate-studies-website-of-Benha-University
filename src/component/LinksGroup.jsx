import { useState } from 'react';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
const navigation = [
  { name: 'الائحة الداخلية للدرسات العليا', href: '#', current: true },
  { name: 'متغيرات الدرجات الممنوحة من اقسام وشعب', href: '#', current: false },
  { name: 'تقديرات عامة علي مستوي الكلية', href: '#', current: false },
  { name: ' تعريف العام الاكاديمي', href: '#', current: false },
];
export default function LinksGroup() {
  const [open, setOpen] = useState(false);
  return (
    <div className="Card w-full ">
      <div className="head w-full flex justify-between rounded-b-lg rounded-t-md  px-5 py-1  items-center w-100  shadow-[inset_0_-1px_3px_rgba(0,0,0,0.4),inset_0_-1px_3px_rgba(0,0,0,0.4)] bg-[#51ACD0]">
        <p className="font-semibold  text-black text-[18px] ">اللوائح</p>
        <button onClick={() => setOpen(!open)}>
          {open == true ? (
            <HiArrowSmUp fontSize={'28px'} />
          ) : (
            <HiArrowSmDown fontSize={'28px'} />
          )}
        </button>
      </div>
      <div className="links flex flex-wrap flex-col  items-start ps-10 py-3 text-[16px]  leading-relaxed  tracking-tighter   ">
        {navigation.map((item) => (
          <a
            key={item.name}
            className={item.current == true ? 'text-green-400 mb-2' : 'mb-2'}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
