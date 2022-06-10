import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialog from './components/Dialogs/Dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='App-content' >
          <Routes >
            <Route path='/profile' element={<Profile commentElements={props.data.commentElements} />} />
            <Route path='/dialogs/*' element={<Dialog contactElements={props.data.contactElements} messageElements={props.data.messageElements} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
