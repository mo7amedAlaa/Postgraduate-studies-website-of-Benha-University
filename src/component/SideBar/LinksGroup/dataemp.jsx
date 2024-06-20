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
];
export default employeeActions;
