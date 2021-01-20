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
import Login from "./components/Login";
import AOS from "aos";
import ReactGA from "react-ga";
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
  useEffect(() => {
    history.listen((location) => {
      ReactGA.initialize("G-JQ3KKCP51S");
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, []);

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <PrivateRoute
            path="/galerija/upload"
            user={userInfo}
            component={UploadForm}
          />
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

            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
