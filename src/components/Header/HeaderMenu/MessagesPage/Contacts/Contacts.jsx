import s from './Contacts.module.css'
import { NavLink } from 'react-router-dom';

function Contacts(props) {
  return (
    <>
      <div className={s.contactsList}>
        <NavLink to={'/messages/' + props.id}>
          {props.name}
        </NavLink>
      </div>
    </>
  )
}

export default Contacts;