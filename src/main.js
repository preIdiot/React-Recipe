import { Switch, Route } from 'react-router-dom'
import Breakfast from './Pages/breakfast';
function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/breakfast' component={Breakfast}/>
        
      </Switch>
    </main>
  );
}