import { useEffect } from 'react';
import Views from './views';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WOW from "wowjs";
import './App.css';
import 'react-tabs/style/react-tabs.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-notifications/lib/notifications.css';


function App() {
  useEffect(() => {
    new WOW.WOW().init();
  })
  return (
    <Router>
      <Switch>
        <Route>
          <Views />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
