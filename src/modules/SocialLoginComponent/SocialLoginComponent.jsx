import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    minWidth: '130px',
    height: '40px',
    '& > span': {
      textTransform: 'capitalize',
      '& > img': {
        maxHeight: '25px',
        objectFit: 'contain',
        marginRight: '8px',
      }
    },
  },
  facebook: {
    color: '#fff',
    backgroundColor: '#38599c',
    '&:hover': {
      backgroundColor: '#38599c',
    },
  },
  google: {
    color: '#000',
    backgroundColor: '#fff',
    border: '2px solid #6d6d6d',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

export function SocialLoginComponent() {

  const classes = useStyles();

  return (

    <Grid container>
      <Grid item xs={6} className={classes.gridItem} >
        <Button variant="contained" className={`${classes.button} ${classes.facebook}`}>
          <img src="/assets/images/bitmapCopy@3x.png" alt="logo-facebook" />
            Facebook
          </Button>
      </Grid>
      <Grid item xs={6} className={classes.gridItem}>
        <Button variant="contained" className={`${classes.button} ${classes.google}`}>
          <img src="/assets/images/bitmapCopy2@3x.png" alt="logo-google" />
            Google
          </Button>
      </Grid>
      <Grid item xs={12}>
        <p>o utiliza tu correo electrónico</p>
      </Grid>
    </Grid>

  )
}