import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add, Remove } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: '40px 20px 0px 20px',
  },
  media: {
    height: '180px',
    marginTop:'30'
  },
  button: {
    border: '1px solid #121212'
  },
  actions: {
    float: 'right'
  }
}));

const MediaCard = (props) => {
  const classes = useStyles();
  const { title, handleDecrease, handleIncrease } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../assets/tomatos.png`)}
          title="Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          onClick={handleDecrease}
          className={classes.button}
          size="small"
        >
          <Remove />
        </Button>
        <Button
          onClick={handleIncrease}
          className={classes.button}
          size="small"
        >
          <Add />
        </Button>
      </CardActions>
    </Card>
  );
};

MediaCard.defaultProps = {
  title: 'Tomatos',
};

export default MediaCard;
