let item1 = 'Главная';
let item2 = 'Курсы';
let item3 = 'Расписание';
let item4 = 'Преподаватели';
let item5 = 'Рассылки';
let item6 = 'Контакты';
let items = [item1,item2,item3,item4,item5,item6];

function Sign() {
  let signName = 'Зайти в кабинет';
  let users = {
      user1: {
        name: 'Миша',
      },
      user2: {
        name: 'Миша',
      },
      user3: {
        name: 'Миша',
      }
    }

  let userName = users.user1.name;

  return <div>
    <button type="button" className="btn btn-primary btn-sign">
    <span>{signName}</span>
    <span>{userName}</span>
    </button>
    <img src="image/content/computer.webp" alt="" className="avatar"/>
    <button type="button" className="btn btn-primary btn-logout">Выйти</button>
  </div>

};

ReactDOM.render(
  <Sign/>,
  document.getElementById('sign')
);
