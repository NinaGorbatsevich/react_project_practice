import s from './HeaderMenu.module.css'
import { NavLink } from "react-router-dom";

const navActive = ({ isActive }) => (isActive ? s.active : s.item);

function HeaderMenu() {
  return (
    <div className={s.menu} path="/messages">
      <NavLink to="/messages" className={navActive}>messages
        <img alt="" />
      </NavLink>
      <a href="">discussions
        <img src="" alt="" />
      </a>
      <a href="">notifications
        <img src="" alt="" />
      </a>
      <a href="">guests
        <img src="" alt="" />
      </a>
      <a href="">likes
        <img src="" alt="" />
      </a>
      <a href="">video
        <img src="" alt="" />
      </a>
      <a href="">audio
        <img src="" alt="" />
      </a>
      <a href="">calendar
        <img src="" alt="" />
      </a>
    </div>
  )
}

export default HeaderMenu; 