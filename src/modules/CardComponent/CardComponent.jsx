import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonComponent } from '../../shared/components/ButtonComponent/ButtonComponent';
import { Link, useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../../shared/components/ButtonComponent/ButtonComponent.scss';
import '../../styles/start&welcome.scss'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 300,
  },
});


export function CardComponent({properties}) {
  
  const classes = useStyles();
  const history = useHistory();
  const redirect = () => {
    history.push(properties.route);
  }

  return (
    <div className="container h-100 c-start">
      <div className="row h-100 justify-content-center align-items-center ">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={properties.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {properties.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">{properties.text}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="d-flex justify-content-center">
            <ButtonComponent onClick={redirect} title={properties.textButton} />
            <Link to={properties.routeRates}>{properties.link}</Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
