import Profile from './components/Profile/Profile';
import user from './user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
// это обычный экмоскрипт модуль, поэтому из него нужно экспортировать компонент и всегда это экспорт по умолчанию
// дефолтный экспорт этого модуля
const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData}></Statistics>
    <Statistics stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </div>
);

export default App;
// ------------------------------------------------------------------
// внутри самого файла компонента объявл компонент, его пропсы, а пропсы он получает там где он рендерится и данные импортировать(джейсон) так где он рендерится
