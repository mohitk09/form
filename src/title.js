import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: '#051124',
    border: 0,
    borderRadius: '4px 4px 0px 0px',
    color: 'white',
    padding: '10px 20px',
  },
});

function CardTitle({ title }) {
  const classes = useStyles();
  return <div className={classes.root}>{title}</div>;
}

export default CardTitle;
