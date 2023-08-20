import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateJoinLobby from "./Pages/Create-join-lobby";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Answers from "./Pages/Answers";
import Lobby from "./Pages/lobby";
import QuestionsAdd from "./Pages/QuestionsAdd";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateJoinLobby />} />
        <Route exact path="/lobby" element={<Lobby />} />
        <Route exact path="/answer" element={<Answers />} />
        <Route exact path="/addQuestions" element={<QuestionsAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
