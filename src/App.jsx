import Profile from './camponents/Profile/Profile';
import Statistics from './camponents/Statistics/Statistics';
import user from './camponents/data/user.json';
import data from './camponents/data/data.json';
import FriendList from './camponents/FriendList/FriendList';
import friends from './camponents/data/friends.json';
import TransactionHistory from './camponents/TransactionHistory/TransactionHistory';
import transactions from './camponents/data/transactions.json';
import { GlobalStyle } from './camponents/GlobalStyle';
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title='Upload stats' stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
