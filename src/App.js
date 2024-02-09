import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Show from './Pages/Show';
import Fave from './Pages/Fave';
import Login from './Pages/Login';
import Register from './Pages/Registration';

function App() {
  return (
    <>
   <BrowserRouter>
        <Navbar />
        <Switch> 
        
          <Route exact path={"/"} component={Home } />
          <Route exact path={"/show/:id"} component={Show } />
          <Route exact path={"/Fave"} component={Fave } />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/Registration"} component={Register} />
          <Route exact path={"*"} component={NotFound} />
        </Switch>
      </BrowserRouter> 
    </> 
  )
}

export default App;
