import React from "react";
import { Button } from "@material-ui/core";

export default function DeleteButton({ onClick }) {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      DELETE
    </Button>
  );
}
