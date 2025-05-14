import s from './MessagesPage.module.css'
import Contacts from './Contacts/Contacts';

function MessagesPage() {
  return (
    <>
      <div className={s.messages}>
        <div className={s.chatList}>
          <h3 className={s.contacts}>Контакты</h3>
          <Contacts id='1' name='Сергей'/>
          <Contacts id='2' name='Нина'/>
          <Contacts id='3' name='Александр'/>
        </div>
        <div className={s.chat}>
          <p>Сообщения</p>
        </div>
      </div>
    </>
  )
}

export default MessagesPage;