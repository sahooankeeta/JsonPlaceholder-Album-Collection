import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "./../Pagination";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums, deleteAlbum } from "./../../actions";
import useStyles from "./styles";
const Albums = ({ setCurrentId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page") || 1;
  const { albums, isLoading, error } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(getAlbums(page));
  }, [dispatch, page]);
  if (error) return <div>{error}</div>;
  if (isLoading)
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );

  return (
    <main className={classes.content}>
      <Grid container alignItems="stretch" spacing={3} justifyContent="center">
        <Grid item>
          <Grid container alignItems="stretch" spacing={3}>
            {albums.length > 0 ? (
              albums.map((album) => (
                <Grid item key={album.id} xs={12} sm={12} md={6} lg={3}>
                  <Paper className={classes.paper}>
                    <div style={{ marginBottom: "10px" }}>{album.title}</div>
                    <div style={{ display: "flex" }}>
                      <Button
                        startIcon={<EditIcon />}
                        onClick={(e) => {
                          setCurrentId(album.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        startIcon={<DeleteIcon />}
                        onClick={() => dispatch(deleteAlbum(album.id))}
                      >
                        del
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              ))
            ) : (
              <div>no items</div>
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Pagination page={page} style={{ margin: "0 auto" }} />
        </Grid>
      </Grid>
    </main>
  );
};
export default Albums;
