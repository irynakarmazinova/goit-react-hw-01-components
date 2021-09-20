import Profile from './components/Profile';
import user from './user.json';

import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList';
import FriendListItem from './components/FriendListItem';
import friends from './friends.json';

// // это обычный экмоскрипт модуль, поэтому из него нужно экспортировать компонент и всегда это экспорт по умолчанию
// // дефолтный экспорт этого модуля
const App = () => {
  return (
    <>
      {/* <div>
        <Profile
          // настраиваем пропсы
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div>
        <Statistics title="Upload stats" stats={statisticalData}>
          task4
        </Statistics>
        <Statistics stats={statisticalData} />
      </div> */}

      <div>
        {/* {friends.map(friends => (
          <FriendList key={friends.id} friends={friends} />
        ))} */}
        {/* <FriendList friends={friends} /> */}
        <FriendListItem friends={friends} />
      </div>
    </>
  );
};
export default App;
// ------------------------------------------------------------------
// внутри самого файла компонента объявл компонент, его пропсы, а пропсы он получает там где он рендерится и данные импортировать(джейсон) так где он рендерится
