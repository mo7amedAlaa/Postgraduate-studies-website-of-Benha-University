const profActions = [
  {
    id: 1,
    title: 'رفع البيانات',
    links: [
      {
        Ltitle: '   رفع محاضرات المقرر',
        href: '/professor/uploadmaterial',
      },
      {
        Ltitle: 'رفع درجات الطلاب ب المقرر ',
        href: '/professor/gradesstudent',
      },
    ],
  },
  {
    id: 2,
    title: ' التقارير',
    links: [
      {
        Ltitle: '   تقرير لمتابعة الطالب  ',

        href: '/professor/studentstuts',
      },
      {
        Ltitle: ' التقرير   لمد المدة  ',
        href: '/professor/extendRestriction',
      },
    ],
  },
];
export default profActions;
