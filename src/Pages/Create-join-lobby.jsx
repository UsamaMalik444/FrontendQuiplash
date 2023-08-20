import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateJoinLobby = () => {
  const navigate = useNavigate();

  const [Username, setUserName] = useState();
  const [lobbyCode, setLobbyCode] = useState();

  const [sectionState, setSectionState] = useState(1);

  const handleJoinLobby = async () => {
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/api/v1/lobby/join`,
      {
        lobbyCode: lobbyCode,
        playerName: Username,
      }
    );

    console.log(res, "Join Lobby");
    navigate("/lobby", { state: { data: res.data } });
  };

  const handleCreateLobby = async () => {
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/api/v1/lobby/create`,
      {
        name: Username,
      }
    );
    console.log(res, "Create Lobby");
    navigate("/lobby", {
      state: {
        data: res.data,
      },
    });
  };

  return (
    <div>
      {sectionState === 0 ? (
        <div
          style={{
            width: "400px",
            height: "300px",
            border: "2px solid",
            marginTop: "100px",
            marginLeft: "500px",
          }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={() => {
                setSectionState(0);
              }}>
              JOIN THE GAME
            </button>
            <button
              onClick={() => {
                setSectionState(1);
              }}>
              Create GAME
            </button>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <div>
              <span>Username : </span>
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div>
              <span>Lobby Code : </span>
              <input
                type="text"
                onChange={(e) => {
                  setLobbyCode(e.target.value);
                }}
              />
            </div>
          </div>
          <button style={{ marginTop: "20px" }} onClick={handleJoinLobby}>
            Join Lobby
          </button>
        </div>
      ) : (
        <div
          style={{
            width: "400px",
            height: "300px",
            border: "2px solid",
            marginTop: "100px",
            marginLeft: "500px",
          }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={() => {
                setSectionState(0);
              }}>
              JOIN THE GAME
            </button>
            <button
              onClick={() => {
                setSectionState(1);
              }}>
              Create GAME
            </button>
          </div>
          <div style={{ paddingTop: "50px" }}>
            <div>
              <span>Username : </span>
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
          </div>
          <button style={{ marginTop: "20px" }} onClick={handleCreateLobby}>
            Create Lobby
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateJoinLobby;
