import React, { useEffect, useState } from "react";
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
import { entNews } from "../APIs/entNews";

const BusinessNews = () => {
  const [news, setData] = useState(null);
  useEffect(() => {
    const getNews = async () => {
      const result = await entNews();
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
            <Grid item xs={6} key={item}>
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

export default BusinessNews;
