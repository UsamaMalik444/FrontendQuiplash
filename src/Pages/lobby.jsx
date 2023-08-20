import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  console.log(data, "ssssssss");

  let creatorId = data.data.playerList[0]._id;

  let len = data.data.playerList.length - 1;
  let lastPlayerId = data.data.playerList[len]._id;

  const handelStartGame = async () => {
    if (creatorId === lastPlayerId) {
      let res = await axios.post(
        `${process.env.REACT_APP_URL}/api/v1/lobby/play`,
        {
          id: creatorId,
        }
      );
      if (res.status === 200) {
        navigate("/answer", {
          state: { data: res.data },
        });
      } else {
        alert(res.statusText);
      }
    } else {
      let res = await axios.post(
        `${process.env.REACT_APP_URL}/api/v1/lobby/status`,
        {
          lobbyId: data.data._id,
          userId: lastPlayerId,
        }
      );

      console.log(res, "non-creator");
    }
  };

  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "300px",
          border: "2px solid",
          marginTop: "100px",
          marginLeft: "500px",
        }}>
        <h2>Lobby</h2>
        <h4>lobby Code : {data.data.lobbyCode}</h4>
        <div style={{ paddingTop: "50px" }}></div>
        <button style={{ marginTop: "20px" }} onClick={handelStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Lobby;
