import s from './Navbar.module.css';
import Navigation from './Navigation/Navigation';

function Navbar() {
  return (
    <>
      <div className={s.navbar}>
        <Navigation />
      </div>
    </>
  )
}

export default Navbar;