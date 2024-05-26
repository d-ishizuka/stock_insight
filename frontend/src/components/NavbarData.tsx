import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from '@mui/icons-material/Favorite';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';

// TODO: user_idを埋めて動的にリンクを生成する
export const NavbarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "検索",
    icon: <SearchIcon />,
    link: "/users/1/search",
  },
  {
    title: "お気に入り",
    icon: <FavoriteIcon />,
    link: "/users/1/favorites",
  },
  {
    title: "ニュース",
    icon: <NewspaperIcon />,
    link: "/users/1/news",
  },
  {
    title: "決算・イベント",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
  {
    title: "売買記録",
    icon: <NoteAltIcon />,
    link: "/users/1/notes",
  },
  {
    title: "設定",
    icon: <SettingsIcon />,
    link: "/users/1/settings",
  }
]
