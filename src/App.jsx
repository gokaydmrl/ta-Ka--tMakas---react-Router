import "./App.css";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import { Routes, Route, useParams } from "react-router-dom";
import Users from "./Users";
import UserDet from "./UserDet";
import Oyun from "./Oyun";
import Algo from "./Algo";

function App() {

const {id} = useParams()

  let users = [
    {
      id: 1,
      isim: "gökay",
    },
    {
      id: 2,
      isim: "abc",
    },
    {
      id: 3,
      isim: "def",
    },
    {
      id: 4,
      isim: "jol",
    },
  ];

  
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="users" element={<Users users={users} />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDet users={users} />} />
        <Route path="/game" element={<Oyun />} />
        <Route path="/algo" element={<Algo />} />
      </Routes>
    </div>
  );
}

export default App;
