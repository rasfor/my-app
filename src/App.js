import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import AllUsersContainer from './components/AllUsers/AllUsersContainer'
import DialogContainer from './components/Dialogs/DialogContainer';
import LoginForm from './components/Login/LoginContainer'
import { Route, Routes} from 'react-router-dom'
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {

  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initialized) {
      return (<Preloader />);
    }
    return (
          <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className="App-content">
              <Routes>
                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                <Route path='/profile/' element={<ProfileContainer/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/dialogs/*' element={<DialogContainer store={this.props.store}/>}/>
                <Route path='/allusers' element={<AllUsersContainer/>}/>
              </Routes>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
    connect(mapStateToProps, { initialize})
)(App)
