import './App.css';
import Header from './components/Header/Header'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useCollectionData} from 'react-firebase-hooks/firestore'

function App() {
  const [posts, loading, error] = useCollectionData(firebase.firestore().collection('posts'))
  return (
    <div className="App">
      <Header />
      <h1>All Posts</h1>
      {loading
        ? 'Loading...'
        : error
        ? 'Error!'
        : posts.map(post => (
        <div>
          {post.userid}: {post.post}
        </div>
        )
      )}
    </div>
  );
}

export default App;
