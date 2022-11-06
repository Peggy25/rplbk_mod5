import "./App.css";
import {List, Paper, Typography } from "@mui/material";
import ListItemUser from "./components/ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
//
const BASE_API_URL = `https://gorest.co.in`;

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      await axios
        .get(`${BASE_API_URL}/public/v2/users`)
        .then((rest) => {
          const response = rest.data;
          response.map((e) => {
            console.log(e.name);
          });
          setUsers(response);
        })
        .catch((error) => {
          window.alert(error);
        });
    }
    getUsers();
  }, []);
  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">
            List User
          </Typography>
        </div>
        <Paper>
          <List>
            {users.map((d) => (
              <ListItemUser
                key={d.id}
                name={`${d.name}`}
                email={`${d.email}`}
              />
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
}

export default App;
