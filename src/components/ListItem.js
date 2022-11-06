import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

function ListItemUser({name, email }) {
  return (
    <ListItem>
      
      <ListItemText
        primary={<Typography variant="h6">{name}</Typography>}
        secondary={<Typography variant="p">email: {email}</Typography>}
      />
    </ListItem>
  );
}

export default ListItemUser;
