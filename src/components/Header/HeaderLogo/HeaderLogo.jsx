import { NavLink } from 'react-router-dom';
import s from './HeaderLogo.module.css'

function HeaderLogo() {
  return (
    <div>
      <NavLink to="/feed">
        <img className={s.logo__img} src="https://avatars.mds.yandex.net/i?id=2fcff47d56e35318b240d27e828f458c72025753-5232864-images-thumbs&n=13" alt="" />
      </NavLink>
    </div>
  )
}

export default HeaderLogo;