import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { getAllShow } from "../../../Redux/Slices";

export default function ShowList() {
  const dispatch = useDispatch();
  const { allPost } = useSelector((state) => state.reducer);

  // const handleChange = (id) => {
  //   dispatch(getShowDetails(id));
  //   console.log("Hello");
  //   // navigate(`/selected-show/${id}`);
  // };
  console.log(allPost)

  useEffect(() => {
    dispatch(getAllShow());
  }, []);

  return (
    <>
      {/* {!isAllShowLoading ? ( */}
      <Box style={{ margin: "40px" }} sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ marginBottom: "50px" }}
          gutterBottom
          variant="h4"
          component="div"
        >
          TV Bland
        </Typography>
        <Typography sx={{ marginBottom: "50px" }} component="div">
          <Typography variant="body2" color="text.secondary">
            species, ranging across all continents except Antarctica.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over
            6,000.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over
            6,000.
          </Typography>
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Last added show
        </Typography>

        <Grid container spacing={2}>
          {allPost &&
            allPost.map((ele, i) => {
              return (
                <Grid key={i} item xs={6} md={4} lg={2}>
                  <Card
                    sx={{ maxWidth: 345 }}
                  //onClick={() => handleChange(ele.id)}
                  >

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {ele.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        color="text.secondary"
                      >
                        {ele.body}
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
      {/* ) : (
        // <Stack
        //   className="container"
        //   sx={{ color: "grey.500" }}
        //   spacing={2}
        //   direction="row"
        // >
        //   <CircularProgress color="secondary" />
        //   <CircularProgress color="success" />
        //   <CircularProgress color="inherit" />
        // </Stack>
      )} */}
    </>
  );
}
