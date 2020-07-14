import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './SimpleCardComponent.scss'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root && props.className} variant="outlined">
            <CardContent className={props.className}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.text1}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.text2}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.text3}
                </Typography>
            </CardContent>
        </Card>
    );
}