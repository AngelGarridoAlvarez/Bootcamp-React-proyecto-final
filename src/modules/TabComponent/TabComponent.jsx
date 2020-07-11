import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
  },
});

export function TabComponent({ tabs }) {

  const selectedTab = tabs.findIndex(element => element.selected)
  const classes = useStyles();
  const [value, setValue] = useState(selectedTab);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const StyledTabs = withStyles({
    flexContainer: {
      justifyContent: 'space-around',
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#FFBA48',
      '& > span': {
        maxWidth: 40,
        width: '100%'
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '14px',
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple  {...props} />);

  return (
    <>
      <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
        {tabs.map((tab, index) =>
          <StyledTab key={index} label={tab.label} component={Link} to={tab.link} />
        )}
      </StyledTabs>
      <Typography className={classes.padding} />
    </>
  )
}