import Profile from './camponents/Profile/Profile';
import Statistics from './camponents/Statistics/Statistics';
import FriendList from './camponents/FriendList/FriendList';
import TransactionHistory from './camponents/TransactionHistory/TransactionHistory';
import { GlobalStyle } from './camponents/GlobalStyle';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
