import s from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const navActive = ({ isActive }) => (isActive ? s.active : s.item);

function Navigation() {
  return (
    <div className="navigation">
      <NavLink to='/profile' className={navActive}>
        <img src="" alt="" />
        Nina Go
      </NavLink>
      <NavLink to='/feed' className={navActive}>
        <img src="" alt="" />
        Лента
      </NavLink>
      <NavLink to='/groups' className={navActive}>
        <img src="" alt="" />
        Группы
      </NavLink>
      <NavLink to='/friends' className={navActive}>
        <img src="" alt="" />
        Друзья
      </NavLink>
      <NavLink to='/photo' className={navActive}>
        <img src="" alt="" />
        Фото
      </NavLink>
      <NavLink to='/games' className={navActive}>
        <img src="" alt="" />
        Игры
      </NavLink>
    </div>
  )
};

export default Navigation;