import s from './Main.module.css';
import { Routes, Route } from 'react-router-dom';
import Messages from '../Header/HeaderMenu/Messages/Messages';

import Profile from '../Navbar/Navigation/Profile/Profile';
import Feed from '../Navbar/Navigation/Feed/Feed';
import Groups from '../Navbar/Navigation/Groups/Groups';
import Friends from '../Navbar/Navigation/Friends/Friends';
import Photo from '../Navbar/Navigation/Photo/Photo';
import Games from '../Navbar/Navigation/Games/Games';

function Main() {
  return (
    <div className={s.main}>
      <Routes>
        <Route path="/messages" element={<Messages />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default Main;