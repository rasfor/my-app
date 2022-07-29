import React,{Suspense} from "react";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Login/LoginContainer'
import { Route, Routes} from 'react-router-dom'
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialize} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

const AllUsersContainer = React.lazy(()=>import('./components/AllUsers/AllUsersContainer'));
const DialogContainer = React.lazy(()=>import('./components/Dialogs/DialogContainer')) ;

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
                <Suspense fallback={<Preloader/>}>
                  <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path='/profile/' element={<ProfileContainer/>}/>
                    <Route path='/login' element={<LoginForm/>}/>
                    <Route path='/dialogs/*' element={<DialogContainer store={this.props.store}/>}/>
                    <Route path='/allusers' element={<AllUsersContainer/>}/>
                  </Routes>
                </Suspense>
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

const AppContainer = compose(
    connect(mapStateToProps, { initialize})
)(App)

const SamuraiJSApp = () => {
    return (
        <BrowserRouter >
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp;