import {Paths} from '@/routers/constants';

export const dataHeaderMenu = (data: any) => [
  {
    id: 'home',
    title: "Giới thiệu",
    link: Paths.Home,
    activePaths: [Paths.Home],
  },
  {
    id: 'faq',
    title: "Tin tức & Sự Kiện",
    link: '',
    activePaths: [],
  },
  {
    id: 'support',
    title: "Quốc gia du học",
    link: '',
    activePaths: [],
  },
  {
    id: 'support',
    title: "Học bổng",
    link: '',
    activePaths: [],
  },
  {
    id: 'support',
    title: "Dịch vụ",
    link: '',
    activePaths: [],
  },
  {
    id: 'support',
    title: "Liên Hệ",
    link: '',
    activePaths: [],
  },
];

export const dataHeaderChildPageMenu = (data: any) => [
  {
    id: 'profile-detail',
    title: data?.trans?.header?.profile,
    activePaths: [Paths.ProfileDetail(data?.id)],
    backPath: Paths.Home,
  },
  {
    id: 'login',
    title: data?.trans?.header?.login,
    activePaths: [Paths.Login],
    backPath: Paths.Home,
  },
  {
    id: 'sign-up',
    title: data?.trans?.header?.signup,
    activePaths: [Paths.SignUp],
    backPath: Paths.Home,
  },
];
