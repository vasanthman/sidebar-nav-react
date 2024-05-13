import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Deals, Primary, Secondary } from './pages/Deals';
import Team from './pages/Logs';
import Companies from './pages/Companies';
import Logs from './pages/Logs';
import Investors from './pages/Investors';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/companies' exact component={Companies} />
        <Route path='/deals' exact component={Deals} />
        <Route path='/reports/primary' exact component={Primary} />
        <Route path='/reports/secondary' exact component={Secondary} />
        <Route path='/investors' exact component={Investors} />
        <Route path='/logs' exact component={Logs} />
        
      </Switch>
    </Router>
  );
}

export default App;
