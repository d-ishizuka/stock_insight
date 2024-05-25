import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from '@mui/icons-material/Favorite';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';

export const NavbarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "検索",
    icon: <SearchIcon />,
    link: "/search",
  },
  {
    title: "お気に入り",
    icon: <FavoriteIcon />,
    link: "/favorites",
  },
  {
    title: "ニュース",
    icon: <NewspaperIcon />,
    link: "/news",
  },
  {
    title: "決算・イベント",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
  {
    title: "売買日記",
    icon: <NoteAltIcon />,
    link: "/notes",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/settings",
  }
]
