import s from './Header.module.css'
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderSearch from './HeaderSearch/HeaderSearch';

function Header() {
  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderSearch />
      </div>
    </div>
  )
}

export default Header;