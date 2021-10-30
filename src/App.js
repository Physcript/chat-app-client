
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'

// css
import './App.css'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path = '/' component = { Home } >
         <Home />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
