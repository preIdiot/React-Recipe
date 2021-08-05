import { Switch, Route } from 'react-router-dom'
import Breakfast from './Pages/breakfast';
function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/brealfast' component={Breakfast}/>
      </Switch>
    </main>
  );
}