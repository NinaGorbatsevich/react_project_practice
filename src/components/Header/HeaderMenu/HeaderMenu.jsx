import s from './HeaderMenu.module.css'
import { NavLink } from "react-router-dom";

const navActive = ({ isActive }) => (isActive ? s.active : s.item);

function MenuItem(props) {
  return (
    <>
      <NavLink to={"/" + props.path} className={navActive}>{props.title}
        <img alt="" />
      </NavLink>
    </>
  )
}

function HeaderMenu() {
  return (
    <div className={s.menu} path="/messages">
      <MenuItem title='message' path='messages'/>
      <MenuItem title='guest' path='guest'/>
      <MenuItem title='likes' path='likes'/>
      <MenuItem title='video' path='video'/>
      <MenuItem title='audio' path='audio'/>
      <MenuItem title='calendar' path='calendar'/>
      
    </div>
  )
}

export default HeaderMenu; 