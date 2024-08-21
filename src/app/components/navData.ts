export const navData = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    subMenu: [
      { name: "Vision, Mission and Value", path: "/vision-mission-value" },
      { name: "Consultant", path: "/consultant" },
    ],
  },
  {
    name: "Service",
    subMenu: [
      { name: "Accounting", path: "/service/accounting" },
      {
        name: "Tax",
        path: "/service/taxation",
      },
      {
        name: "Business Advisory",
        path: "/service/business-advisory",
      },
      {
        name: "Business Training",
        path: "/service/business-training",
      },
      { name: "Seminar and Activity", path: "/seminar-and-activity" },
    ],
  },
  {
    name: "Career",
    subMenu: [
      { name: "Job vacancy", path: "/job-vacancy" },
      { name: "Programs and Activities", path: "/program-and-activity" },
    ],
  },
  { name: "Article", path: "/article" },
  { name: "Forum", path: "/forum" },
];
