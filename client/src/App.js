import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className='container'>
      <h1>Create PostS</h1>
      <PostCreate />
      <hr />
      <h1>PostS</h1>
      <PostList />
    </div>
  );
}

export default App;
