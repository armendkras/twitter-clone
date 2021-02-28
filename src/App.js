import './App.css';
import Feed from './Feed';
import {useState} from 'react';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import NavBar from './NavBar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TweetBox from './TweetBox';
import CloseIcon from '@material-ui/icons/Close';

function App() {

  const [show, setShow] = useState(false);

  const postTweet = () => {
    setShow(!show);
  }


  return (
    // BEM
    <div className="app">
     
      <Sidebar/>
      {show ? <TweetBox /> : <Feed/>}
      
      {show ? <div className="plusIconD"><CloseIcon onClick={postTweet} className="closeIcon"/></div>: 
      <div className="plusIconD">
      <AddCircleOutlineIcon onClick={postTweet} className="plusIcon" />
      </div>
      }
      
      
      <NavBar/>
      <Widgets />
    </div>
  );
}

export default App;
