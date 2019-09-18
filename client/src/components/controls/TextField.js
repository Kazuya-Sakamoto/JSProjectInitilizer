import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function CTextField(props) {
  const classes = useStyles();
  const handleChange = name => event => {

  };

  return (
      <TextField
        id="standard-name"
        label={props.label}
        className={classes.textField}
        value= {props.value}
        onChange={handleChange('name')}
        margin="normal"
        placeholder="Placeholder"
        InputLabelProps={{
            shrink: true,
          }}
      />
  );
}
