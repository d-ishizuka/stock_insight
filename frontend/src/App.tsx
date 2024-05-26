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
      <div className="content">
        <MiniDrawer />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/:id/search" element={<Search />} />
        <Route path="users/:id/favorites" element={<Favorites />} />
        <Route path="users/:id/news" element={<News />} />
        <Route path="calender" element={<Calender />} />
        <Route path="users/:id/notes" element={<Note />} />
        <Route path="users/:id/settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
