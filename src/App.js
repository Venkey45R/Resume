import Header from "./component/Header";
import Project from "./component/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./component/Blog";
import Resume from "./component/Resume";

function App(){
  return(
    <div className=" block md:flex bg-gray-200">
      <Router>
          <Header />
          <Routes>
            <Route path="/project" Component={Project} />
            <Route path="/Blog" Component={Blog}/>
            <Route path="/Resume" Component={Resume} />
            <Route index element={<Resume />} />
            <Route>Error 404</Route>
          </Routes>

      </Router>
    </div>
  )
}

export default App;