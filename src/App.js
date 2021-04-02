import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Canvas from "./components/Canvas/Canvas.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import About from "./components/About/About.jsx";
/* import Contact from "./components/Contact/Contact.jsx"; */
import Contact2 from "./components/Contact2/Contact2.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Card from "./components/Card/Card.jsx";
class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  
  render() {
    return (
      <div className="App">
        <div className="background">
          <Router>
            <Navbar />
            <Canvas />
            <Wrapper>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  {/* <Contact /> */}
                  <Contact2 />
                </Route>
                <Route path="/gallery">
                  <Card />
                </Route>
              </Switch>
            </Wrapper>
            <Footer />
          </Router>
        </div>
      </div>
    );
}
}
export default App;
