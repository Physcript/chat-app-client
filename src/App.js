
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Register from './pages/Register'
import Dash from './pages/Dash'

// css
import './App.css'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path = '/' component = { Home } >
         <Home />
       </Route>
       <Route exact path = '/register' component = { Register } >
         <Register />
       </Route>
       <Route exact path = '/home' component = { Dash }>
          <Dash />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
