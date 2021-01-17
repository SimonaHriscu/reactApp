import React from "react";
import movies from "../services/fakeMovieService";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  boldRow: {
    fontWeight: "600",
  },
});

const Movies = () => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.boldRow}>Title</TableCell>
            <TableCell className={classes.boldRow} align="left">
              Genre
            </TableCell>
            <TableCell className={classes.boldRow} align="left">
              Stock
            </TableCell>
            <TableCell className={classes.boldRow} align="left">
              Rate
            </TableCell>
            <TableCell className={classes.boldRow} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.title}>
              <TableCell component="th" scope="movie">
                {movie.title}
              </TableCell>
              <TableCell align="left">{movie.genre.name}</TableCell>
              <TableCell align="left">{movie.numberInStock}</TableCell>
              <TableCell align="left">{movie.dailyRentalRate}</TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Movies;
