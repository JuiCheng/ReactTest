import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useRoutes 
  // useRouteMatch,
  // useHistory
} from "react-router-dom";

import Topic from "./Topic";

export default function Topics() {
  let navigate = useNavigate();
 
  // const App = () => {
  //   let element = useRoutes([
  //     {
  //       path: "/",
  //       element: <Dashboard />,
  //       children: [
  //         {
  //           path: "messages",
  //           element: <DashboardMessages />
  //         },
  //         { path: "tasks", element: <DashboardTasks /> }
  //       ]
  //     },
  //     { path: "team", element: <AboutPage /> }
  //   ]);
  //   return element;
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="props-v-state">Props v. State</Link>
        </li>
      </ul>
      <button onClick={() => navigate("/about")}>About</button>

      <Routes>
        <Route path=":topicId" element={<Topic />} />
        {/* <Route path="/:topicId" element={<Topic />} /> */}
        <Route path="*" element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}
