import { useEffect, useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation, useHistory } from "react-router-dom";
import { useAddress, useWeb3Context } from "./hooks/web3Context";
import useNFTData from "./hooks/useNFTData";

import Home from './views/Home/Home'
import Gallery from './views/Gallery'
import Collection from "./views/Collection";
import MarketPlace from "./views/MarketPlace";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

import "./style.scss";
import './App.css'
import Notification from "./components/Notification";



function App() {
  const { connect, hasCachedProvider } = useWeb3Context();
  const account = useAddress();

  const [notification, setNotification] = useState(null);
  const [showfilter, setShowFilter] = useState(false);


  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then(msg => {
        if (msg.type === 'error') {
          setNotification(msg)
        }
      });

    } else {
      // then user DOES NOT have a wallet
    }

    // We want to ensure that we are storing the UTM parameters for later, even if the user follows links
  }, []);

  return (
    <Router>

      <TopBar setNotification={setNotification} setShowFilter={setShowFilter} />

      <Switch>

        <Route exact path="/">
          <Home setNotification={setNotification} />
        </Route>

        <Route exact path="/collection">
          <Collection showfilter={showfilter} setShowFilter={setShowFilter} />
        </Route>

        <Route exact path="/gallery">
          <Gallery showfilter={showfilter} setShowFilter={setShowFilter} />
        </Route>

        <Route exact path="/marketplace">
          <MarketPlace />
        </Route>

      </Switch>

      <Footer />
      <Notification data={notification} />
    </Router>
  );
}

export default App;
