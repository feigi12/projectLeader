import './App.css';
import Menu from './component/menu'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './component/home';
import Products from './component/allPost'
import Register from './component/register'
import NewPost from './component/newPost'
import Login from './component/login'
import MyPost from './component/myPost'
import Flash from './component/fles'
import { useState } from 'react'
import AllPost from './component/allPost';
function App() {
  return (

    <div className="App" >
      <Router>
        <Flash>
          <Switch>
            <Route path="/menu">
              <Menu />
             
            </Route>
            <Route path="/newPost">
              <NewPost />
            </Route>
            <Route path="/myPost">
            <MyPost />
            </Route>
            <Route path="/allPost">
              <AllPost />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/" exact>
              <Register></Register>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
          </Switch>
        </Flash>

      </Router>

    </div>


  );
}
export default App;
