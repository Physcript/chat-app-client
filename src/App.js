
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Register from './pages/Register'

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
     </Switch>
   </Router>
  );
}

export default App;
