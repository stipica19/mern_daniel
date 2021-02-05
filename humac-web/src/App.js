import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galerija from "./components/Galerija";
import GalerijaPage from "./components/GalerijaPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Usluge from "./components/Usluge";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GalerijaOne from "./components/GalerijaOne";
import UploadForm from "./components/UploadForm";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Bye from "./components/Bye";
import Admin from "./components/Admin";
import Login from "./components/Login";
import AOS from "aos";
import MessengerCustomerChat from "react-messenger-customer-chat";

import { createBrowserHistory } from "history";

// internal imports
import "./App.css";
import "aos/dist/aos.css";
import ScrollTopArrow from "./components/ScrollTopArrow";
// initialization
AOS.init();

function App() {
  const history = createBrowserHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <PrivateRoute
            path="/galerija/upload"
            user={userInfo}
            component={UploadForm}
          />
          <PrivateRoute path="/admin" user={userInfo} component={Admin} />

          <Route path="/unauthorized" component={Bye} />
          <Route path="/galerija/:cat">
            <GalerijaOne />
            <Footer />
          </Route>
          <Route path="/galerija">
            <Header />
            <GalerijaPage />
            <Footer />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route exact path="/">
            <ScrollTopArrow />
            <Header />
            <Home />
            <About />
            <Usluge />
            <Galerija />
            <Contact />
            <MessengerCustomerChat
              pageId="239772589537326"
              appId="408068093813051"
            />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
