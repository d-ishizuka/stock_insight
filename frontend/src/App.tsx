import { MiniDrawer } from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Favorites } from './pages/Favorites';
import { News } from './pages/News';
import { Calender } from './pages/Calendar';
import { Note } from './pages/Note';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MiniDrawer contents={<Home />}/>} />
        <Route path="users/:id/search" element={<MiniDrawer contents={<Search />}/>} />
        <Route path="users/:id/favorites" element={<MiniDrawer contents={<Favorites />}/>} />
        <Route path="users/:id/news" element={<MiniDrawer contents={<News />}/>} />
        <Route path="calendar" element={<MiniDrawer contents={<Calender />}/>} />
        <Route path="users/:id/notes" element={<MiniDrawer contents={<Note />}/>} />
        <Route path="users/:id/settings" element={<MiniDrawer contents={<Settings />}/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
