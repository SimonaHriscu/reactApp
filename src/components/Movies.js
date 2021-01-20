import React, { Fragment, useState } from "react";
import movies from "../services/fakeMovieService";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteButton from "./DeleteButtonComponent";
//import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  table: {
    width: "90%",
  },
  boldRow: {
    fontWeight: "600",
  },
  emptyDatabase: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  const handleRemoveItem = (movie) => {
    const newMovieArray = movieList.filter((item) => movie._id !== item._id);
    setMovieList(newMovieArray);
  };
  const classes = useStyles();
  const count = movieList.length;
  return count ? (
    <Fragment>
      <TableContainer className={classes.container}>
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
            {movieList.map((movie) => (
              <TableRow key={movie._id}>
                <TableCell component="th" scope="movie">
                  {movie.title}
                </TableCell>
                <TableCell align="left">{movie.genre.name}</TableCell>
                <TableCell align="left">{movie.numberInStock}</TableCell>
                <TableCell align="left">{movie.dailyRentalRate}</TableCell>

                <TableCell>
                  <DeleteButton onClick={() => handleRemoveItem(movie)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  ) : (
    <div className={classes.container}>
      There are no more movies in the database
    </div>
  );
};

export default Movies;
