import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { createAlbum, updateAlbum } from "./../../actions";
const ModalForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [albumData, setAlbumData] = React.useState({
    userId: "",
    title: "",
  });
  const album = useSelector((state) =>
    currentId ? state.albums.find((a) => a.id === currentId) : null
  );
  const clear = () => {
    setCurrentId(0);
    setAlbumData({ userId: "", title: "" });
  };

  React.useEffect(() => {
    if (!album?.title) clear();

    if (album)
      setAlbumData({ userId: +album.userId, title: album.title, id: album.id });
  }, [album]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createAlbum(albumData));
      console.log("create");
    } else {
      dispatch(updateAlbum(albumData));
    }

    clear();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Typography variant="h6">
        {currentId ? `Editing ` : "Creating "}a Album
      </Typography>
      <TextField
        required
        type="number"
        name="userId"
        variant="outlined"
        label="userId"
        fullWidth
        value={albumData.userId}
        style={{ marginBottom: "10px" }}
        onChange={(e) =>
          setAlbumData({ ...albumData, userId: +e.target.value })
        }
      ></TextField>
      <TextField
        required
        name="title"
        variant="outlined"
        label="title"
        fullWidth
        value={albumData.title}
        onChange={(e) => setAlbumData({ ...albumData, title: e.target.value })}
      ></TextField>
      <Button variant="primary" type="submit" style={{ margin: "10px" }}>
        Submit
      </Button>
      <Button onClick={clear}>clear</Button>
    </Form>
  );
};
export default ModalForm;
