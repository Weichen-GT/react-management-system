export default [
  {
    path: "/home",
    name: "home",
    label: "HomePage",
    icon: "HomeOutlined",
    url: "/home/Home",
  },
  {
    path: "/mall",
    name: "mall",
    label: "merchen manage",
    icon: "ShopOutlined",
    url: "/mail/Mall",
  },
  {
    path: "/user",
    name: "user",
    label: "UserManagement",
    icon: "UserOutlined",
    url: "/user/User",
  },
  {
    path: "/other",
    label: "Others",
    icon: "SettingOutlined",
    children: [
      {
        path: "/other/pageone",
        name: "page1",
        label: "OtherPage1",
        icon: "SettingOutlined",
      },
      {
        path: "/other/pagetwo",
        name: "page2",
        label: "OtherPage2",
        icon: "SettingOutlined",
      },
    ],
  },
];
