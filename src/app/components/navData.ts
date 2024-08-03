export const navData = [
  { name: "Beranda", path: "/" },
  {
    name: "Tentang Kami",
    subMenu: [
      { name: "Visi, Misi dan Nilai", path: "/vision-mission-value" },
      { name: "Konsultan", path: "/consultant" },
    ],
  },
  {
    name: "Layanan",
    subMenu: [
      { name: "Seminar dan Kegiatan", path: "/seminar-and-activity" },
      {
        name: "Servis",
        subMenu: [
          { name: "Akuntansi", path: "/service/accounting" },
          {
            name: "Perpajakan",
            path: "/service/taxation",
          },
          //   { name: "Audit", path: "/service/auditing" },
          {
            name: "Penasihat Bisnis",
            path: "/service/business-advisory",
          },
          {
            name: "Pelatihan Bisnis",
            path: "/service/business-training",
          },
        ],
      },
    ],
  },
  {
    name: "Karir",
    subMenu: [
      { name: "Lowongan Pekerjaan", path: "/job-vacancy" },
      { name: "Program dan Kegiatan", path: "/program-and-activity" },
    ],
  },
  { name: "Artikel", path: "/article" },
  { name: "Forum", path: "/forum" },
];
