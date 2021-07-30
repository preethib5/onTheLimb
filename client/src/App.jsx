import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import ProtectedRoute from './pages/Auth/Auth';

import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (

    <div className="app">

      <BrowserRouter>
      <Switch>
        
      <Route path="/login" exact component={Login}/>
        <ProtectedRoute path="/" exact component={Home}></ProtectedRoute>        
        <Route path="/upload" exact component={Upload}/>
      </Switch>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
