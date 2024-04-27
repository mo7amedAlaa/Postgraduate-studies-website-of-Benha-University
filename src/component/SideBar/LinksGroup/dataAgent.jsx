const agentActions = [
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
        {
          Ltitle: '  رفع المشاريع والاختبارات        ',
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
          href: '/professor/studentfollowup',
        },
        {
          Ltitle: ' التقرير   لمد المدة  ',
          href: '/professor/extensionreport',
        },
      ],
    },
  ];
  export default agentActions;
  