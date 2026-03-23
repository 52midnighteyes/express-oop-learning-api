import { MatchType, matchStatus } from "../../generated/prisma/enums.js";

export interface IMatch {
  opponent: string;
  matchDate: Date;
  matchType: MatchType;
  status: matchStatus;
  opponentLogo: string;
  opponentLogoPublicId: string;
  location: string;
  season: string;
  opponentScore: number | null;
  teamScore: number | null;
}

export const persijaMatches: IMatch[] = [
  {
    opponent: "Dewa United Banten FC",
    matchDate: new Date("2026-03-15T20:30:00+07:00"),
    matchType: "HOME",
    status: "COMPLETED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220999/209_lnrpgf.webp",
    opponentLogoPublicId: "209_lnrpgf",
    location: "Jakarta International Stadium, Jakarta",
    season: "2025/2026",
    opponentScore: 1,
    teamScore: 1,
  },
  {
    opponent: "Borneo FC Samarinda",
    matchDate: new Date("2026-03-03T20:30:00+07:00"),
    matchType: "HOME",
    status: "COMPLETED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220998/192_plyopd.webp",
    opponentLogoPublicId: "192_plyopd",
    location: "Jakarta International Stadium, Jakarta",
    season: "2025/2026",
    opponentScore: 2,
    teamScore: 2,
  },
  {
    opponent: "Malut United FC",
    matchDate: new Date("2026-02-24T19:00:00+07:00"),
    matchType: "AWAY",
    status: "COMPLETED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220998/1819851379_o9eps9.webp",
    opponentLogoPublicId: "1819851379_o9eps9",
    location: "Stadion Kie Raha, Ternate",
    season: "2025/2026",
    opponentScore: 2,
    teamScore: 3,
  },
  {
    opponent: "PSM Makassar",
    matchDate: new Date("2026-02-20T20:30:00+07:00"),
    matchType: "HOME",
    status: "COMPLETED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774221000/50_alachy.webp",
    opponentLogoPublicId: "50_alachy",
    location: "Jakarta International Stadium, Jakarta",
    season: "2025/2026",
    opponentScore: 1,
    teamScore: 2,
  },
  {
    opponent: "Bali United FC",
    matchDate: new Date("2026-02-15T19:00:00+07:00"),
    matchType: "AWAY",
    status: "COMPLETED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774221000/71_sdfgmc.webp",
    opponentLogoPublicId: "71_sdfgmc",
    location: "Stadion Kapten I Wayan Dipta, Gianyar",
    season: "2025/2026",
    opponentScore: 0,
    teamScore: 1,
  },
  {
    opponent: "Bhayangkara Presisi Indonesia FC",
    matchDate: new Date("2026-04-05T15:30:00+07:00"),
    matchType: "AWAY",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220999/30_tjluyx.webp",
    opponentLogoPublicId: "30_tjluyx",
    location: "Stadion Sumpah Pemuda, Lampung",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "Persebaya Surabaya",
    matchDate: new Date("2026-04-11T19:00:00+07:00"),
    matchType: "HOME",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220999/280_tdyds1.webp",
    opponentLogoPublicId: "280_tdyds1",
    location: "Gelora Bung Karno, Jakarta",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "PSBS Biak",
    matchDate: new Date("2026-04-18T19:00:00+07:00"),
    matchType: "AWAY",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220998/181_hxlhaz.webp",
    opponentLogoPublicId: "181_hxlhaz",
    location: "Stadion Maguwoharjo, Sleman",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "PSIM Yogyakarta",
    matchDate: new Date("2026-04-22T19:00:00+07:00"),
    matchType: "AWAY",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220999/27_njvqxb.webp",
    opponentLogoPublicId: "27_njvqxb",
    location: "Stadion Sultan Agung, Bantul",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "Persis Solo",
    matchDate: new Date("2026-04-27T19:00:00+07:00"),
    matchType: "HOME",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774221000/67_mtvrm9.webp",
    opponentLogoPublicId: "67_mtvrm9",
    location: "Gelora Bung Karno, Jakarta",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "Persijap Jepara",
    matchDate: new Date("2026-05-04T19:00:00+07:00"),
    matchType: "AWAY",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220999/21_cjj9yy.webp",
    opponentLogoPublicId: "21_cjj9yy",
    location: "Stadion Bumi Kartini, Jepara",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "Persib",
    matchDate: new Date("2026-05-10T15:30:00+07:00"),
    matchType: "HOME",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774220998/11_ptwerf.webp",
    opponentLogoPublicId: "11_ptwerf",
    location: "Gelora Bung Karno, Jakarta",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "Persik Kediri",
    matchDate: new Date("2026-05-16T15:30:00+07:00"),
    matchType: "AWAY",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774221000/37_lzg0e4.webp",
    opponentLogoPublicId: "37_lzg0e4",
    location: "Stadion Brawijaya, Kediri",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
  {
    opponent: "Semen Padang FC",
    matchDate: new Date("2026-05-23T00:00:00+07:00"),
    matchType: "HOME",
    status: "SCHEDULED",
    opponentLogo:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774221000/5_btz1nu.webp",
    opponentLogoPublicId: "5_btz1nu",
    location: "Gelora Bung Karno, Jakarta",
    season: "2025/2026",
    opponentScore: null,
    teamScore: null,
  },
];
