import s from './HeaderSearch.module.css'

function HeaderSearch() {
  return (
    <div className={s.search}>
      <a href="">
        <img src="" alt="" />
      </a>
      <input type="text" placeholder='Искать на сайте'/>
      <a>
        <img src="" alt="" />
      </a>
    </div>
  )
}

export default HeaderSearch; 