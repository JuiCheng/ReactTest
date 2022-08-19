import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Topics from "./Topics";
// import MapView from '../pages/Map/Map.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

// class Hello extends React.Component {
//   render() {
//     return <h1>Hello! {this.props.match.params.userName}</h1>;
//   }
// }



// Hello.propTypes = {
//   match: PropTypes.object,
// };

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
