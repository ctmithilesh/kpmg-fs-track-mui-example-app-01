import React, { useEffect, useState } from "react";
import { getMyNews } from "../APIs/getMyNews";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const MyNews = () => {
  const [news, setData] = useState(null);
  useEffect(() => {
    const getNews = async () => {
      const result = await getMyNews();
      console.log(result);
      setData(result);
    };
    getNews();
  }, []);

  return (
    <>
      <h1> My News</h1>
      <Grid container spacing={2}>
        {news != null && news.length ? (
          news.map((item) => (
            <Grid item xs={4} key={item}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.urlToImage}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <span> Loading.... </span>
        )}
      </Grid>
    </>
  );
};

export default MyNews;
