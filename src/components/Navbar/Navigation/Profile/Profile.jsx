import s from './Profile.module.css'

function Profile() {
  return (
    <>
      <div className={s.cover}>
        <button>Добавить обложку</button>
        <a href="">Nina Go</a>
      </div>

      <div className={s.settingsWrapper}>
        <img src="https://pushinka.top/uploads/posts/2023-04/1680759354_pushinka-top-p-avatarka-neitralnaya-zhenskaya-avatarka-kr-60.png" alt="" />
        <a href="">Настройки</a>
        <a href="">Поделиться</a>
        <a href="">...</a>
      </div>

      <div className={s.photo}>
        <a href="" className={s.newPhoto}>Новые фотографии</a>
        <a href="" className={s.addPhoto}>Добавить фото</a>
      </div>

      <div className={s.posts}>
        <div className={s.addPost}>
          <div>
            <textarea className={s.textarea} name="" id="" placeholder='Что у Вас нового?'></textarea>
          </div>
          <button className={s.postAddButton}>
            Опубликовать
          </button>
        </div>

        <div className={s.post}>
          <p> Имя пользователя</p>
          <p>текст</p>
        </div>
      </div>
    </>
  )
}

export default Profile;