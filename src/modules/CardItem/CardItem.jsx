import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonComponent } from '../../shared/components/ButtonComponent';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../styles/blocks/material-ui/_material-ui-button.blocks.scss';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 300,
  },
});

export function CardItem(props) {

  const history = useHistory();
  const redirect = () => {
    history.push(props.route);
  }

  const classes = useStyles();

  return (
    <div className="">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">{props.text}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonComponent onClick={redirect} title={props.textButton}>
          </ButtonComponent>
          <Button size="small" color="primary">
            {props.link}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
