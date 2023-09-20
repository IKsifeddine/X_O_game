import Modal from "./components/modal/Modal";
import Board from "./components/board/Board";
import Start from "./components/start/Start";
import { useContext } from "react";
import { GameContext } from "./components/context/GameContext";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" && <Start />}
        {screen === "game" && <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
