import { Fragment, useState } from "react";
import movies from "../services/fakeMovieService";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteButton from "./DeleteButtonComponent";

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
    width: "50%",
  },
  boldRow: {
    fontWeight: "600",
  },
  checkedItem: {
    textDecoration: "line-through",
    color: "red",
  },
});

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  const [isCompleted, setIsCompleted] = useState();
  const handleRemoveItem = (movie) => {
    const newMovieArray = movieList.filter((item) => movie._id !== item._id);
    setMovieList(newMovieArray);
  };
  const handleCheck = (movie) => {
    const newMovieList = [...movieList];
    const newItem = newMovieList.filter((item) => movie._id === item._id);
    setIsCompleted(true);
  };
  const classes = useStyles();
  const count = movieList.length;
  return count ? (
    <Fragment>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.boldRow} align="center">
                CHECK
              </TableCell>
              <TableCell className={classes.boldRow}>Title</TableCell>
              <TableCell className={classes.boldRow} align="center">
                Genre
              </TableCell>
              <TableCell className={classes.boldRow} align="center">
                Stock
              </TableCell>
              <TableCell className={classes.boldRow} align="center">
                Rate
              </TableCell>
              <TableCell className={classes.boldRow} align="center">
                DELETE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movieList.map((movie) => (
              <TableRow
                key={movie._id}
                // className={isCompleted.length ? classes.checkedItem : ""}
              >
                <TableCell align="center">
                  <DeleteButton
                    color="default"
                    onClick={() => handleCheck(movie)}
                  >
                    DONE
                  </DeleteButton>
                </TableCell>
                <TableCell component="th" scope="movie">
                  {movie.title}
                </TableCell>
                <TableCell align="center">{movie.genre.name}</TableCell>
                <TableCell align="center">{movie.numberInStock}</TableCell>
                <TableCell align="center">{movie.dailyRentalRate}</TableCell>

                <TableCell align="center">
                  <DeleteButton
                    color="secondary"
                    onClick={() => handleRemoveItem(movie)}
                  >
                    DELETE
                  </DeleteButton>
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
