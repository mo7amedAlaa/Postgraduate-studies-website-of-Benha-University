const employeeActions = [
  {
    id: 1,
    title: 'اللوائح',
    links: [
      {
        Ltitle: 'الائحة الداخلية للدرسات العليا',
        href: '/employee/page1',
      },
      {
        Ltitle: 'شروط القيد بالكليات المؤهل ',
        href: '/employee/page2',
      },
      {
        Ltitle: ' تقديرات عامة على مستوى الكلية     ',
        href: '/employee/page3',
      },
      {
        Ltitle: '  تعريف العام الاكاديمى        ',
        href: '/employee/page4',
      },
      {
        Ltitle: 'متغيرات الدرجات الممنوحة من اقسام وشعب',
        href: '/employee/page5',
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
      { Ltitle: '  رفع الجدول ', href: '/employee/uploadschedule', },
      { Ltitle: '  رفع الدرجات ', href: '/employee/uploadallgrades', },

    ],
  },
  {
    id: 4,
    title: '  متابعة الطلاب ',
    links: [
      { Ltitle: 'المصروفات', href: '/#' },
      { Ltitle: '  تقارير المصروفات', href: '/#' },
      { Ltitle: 'اعذار ومخالفات وعقوبات الطلاب ', href: '/#' },
      { Ltitle: '  اضافة سجلات الطلاب ', href: '/#' },
    ],
  },
  {
    id: 5,
    title: '   ارقام الجلوس ',
    links: [
      { Ltitle: 'ارقام الجلوس', href: '/#' },
      {
        Ltitle: '  ارقام الجلوس من والى ملف الاكسل ',
        href: '/#',
      },
    ],
  },
  {
    id: 6,
    title: '  تسجيل نتائج الطلاب ',
    links: [
      { Ltitle: ' نظام السنوات الدراسية', href: '/#' },
      { Ltitle: '   نظام الساعات المعتمدة', href: '/#' },
      { Ltitle: '     الالتماس', href: '/employee/petition' },
      { Ltitle: '   الرفع  ', href: '/#' },
      { Ltitle: '   تسجيل نتائج مقرر  ', href: '/#' },
      {
        Ltitle: '     رصدالمقرارات بجميع طرق التقييم',
        href: '/#',
      },
    ],
  },
  {
    id: 7,
    title: '    منح الدرجة للطلاب الخريجين ',
    links: [
      { Ltitle: '   منح الدرجة للطلاب الخريجين', href: '/#' },
      {
        Ltitle: '     اجتياز الطلاب للمراحل التمهيدية',
        href: '/#',
      },
    ],
  },
  {
    id: 8,
    title: '       تقارير ',
    links: [
      { Ltitle: '   تقاريرالتسجيل الالكترونى', href: '/#' },
      { Ltitle: '      تقربر اللوائح', href: '/#' },
      { Ltitle: '      تقارير المقيدين ', href: '/#' },
    ],
  },
];
export default employeeActions;
