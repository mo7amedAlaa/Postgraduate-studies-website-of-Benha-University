const AdminActions = [
  {
    id: 1,
    title: 'النظام',
    links: [
      {
        Ltitle: 'التحكم فى فتح وغلق النظام',
        href: '/',
      },
    ],
  },
  {
    id: 2,
    title: '  الايميل الجامعى',
    links: [
      {
        Ltitle: ' انشاء الايميل الجامعى ',
        href: '/admin/GenerateAccount',
      },
      {
        Ltitle: 'حذف الايميل الجامعى ',
        href: '/admin/GenerateAccount',
      },
    ],
  },
];
export default AdminActions;
