import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import AllUsersContainer from './components/AllUsers/AllUsersContainer'
import DialogContainer from './components/Dialogs/DialogContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="App-content" >
          <Routes >
            <Route path='/profile/:userId' element={<ProfileContainer/>} />
            <Route path='/profile/' element={<ProfileContainer/>} />
            <Route path='/dialogs/*' element={<DialogContainer store={props.store} />} />
            <Route path='/allusers' element={<AllUsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
