import * as React from "react";

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

import Container from "@mui/material/Container";

import Albums from "./../Albums/Albums";
import Form from "../Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = React.useState(0);
  return (
    <Container maxWidth="xl" style={{ marginBottom: "50px" }}>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Albums setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default Home;
