const employeeActions = [
  {
    id: 1,
    title: 'اللوائح',
    links: [
      {
        Ltitle: 'الائحة الداخلية للدرسات العليا',
        href: '/employee/Regulations',
      },
    ],
  },
  {
    id: 2,
    title: 'بيانات الطالب',
    links: [
      {
        Ltitle: 'تسجيل الطالب للدرسات العليا',
        href: '/employee/studentinformation',
      },
      {
        Ltitle: 'كشف باسماء الطلاب المسجلين بالدرسات العليا',
        href: '/employee/studentinformationReport',
      },
    ],
  },
  {
    id: 3,
    title: '  الجداول',
    links: [
      { Ltitle: '  رفع الجدول ', href: '/employee/uploadschedule' },
      { Ltitle: '  رفع الدرجات ', href: '/employee/uploadallgrades' },
    ],
  },
  {
    id: 4,
    title: '   متابعة المصروفات للطاب',
    links: [
      { Ltitle: 'المصروفات', href: '/#' },
      { Ltitle: '  تقارير المصروفات', href: '/#' },
    ],
  },

  {
    id: 6,
    title: '  تسجيل نتائج الطلاب ',
    links: [
      { Ltitle: '   تسجيل نتائج مقرر  ', href: '/#' },
      { Ltitle: '   الرفع  ', href: '/#' },
    ],
  },

  {
    id: 8,
    title: '      طلابات و تقارير ',
    links: [{ Ltitle: '   الالتماس', href: '/employee/petition' }],
  },
];
export default employeeActions;
