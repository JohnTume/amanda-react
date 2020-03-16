import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Spinner from "./Spinner";
import registerServiceWorker from "./registerServiceWorker";
import firebase from "./firebase";
import Cards from "./components/src_sub/Cards/Cards";
import "semantic-ui-css/semantic.min.css";
import {InspireContainer} from './components/src_sub/Inspire/InspireContainer';
import aboutProject from './components/src_sub/aboutUs/aboutUs.js';
import Navi from './components/src_sub/navCom/Navi.js';
import {BrowserRouter, Link} from "react-router-dom";

import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";

import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers";
import {setUser, clearUser} from "./actions";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase
            .auth()
            .onAuthStateChanged(user => { // to add the navbar and other components, we need to figure out the logic
                                          // of being logged in/registered. Like the if statements the user is logged in
                                          // they should be directed to our home page (from the other proj)
                if (user) {
                
                    // console.log(user);
                    this
                        .props
                        .setUser(user);
                    this
                        .props
                        .history
                        .push("/");
                } else {
                    this
                        .props
                        .history
                        .push("/login");
                    this
                        .props
                        .clearUser();

                }
            });
    }

    render() {
        return this.props.isLoading
            ? (<Spinner/>)
            : (
                <BrowserRouter>
                    <div>
                       {/*having this navbar component doesn't work*/}
                        {/* <Navi className='navbar'></Navi> */}

                        <Switch>
                            <Route path="/" component={App}/>
                            {/* <Route exact="exact" path='/' component={Cards}/>
                            <Route exact="exact" path='/aboutUs' component={aboutProject}/>
                            <Route exact="exact" path='/inspire' component={InspireContainer}/> */}
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            );
    }
}

const mapStateFromProps = state => ({isLoading: state.user.isLoading});

const RootWithAuth = withRouter(
    connect(mapStateFromProps, {setUser, clearUser})(
        Root
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth/>
        </Router>
    </Provider>,
    document.getElementById(
        "root"
    )
);
registerServiceWorker();
