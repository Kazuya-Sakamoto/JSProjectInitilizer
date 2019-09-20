import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(id,index) {
  return {
    id: `${id}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: 800
  },
  tab: {
    maxWidth: 50,
    minWidth: 20,
    position: "relative"
  }
}));

export default function BasicTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
    if(props.handleChange){
      props.handleChange(event,newValue);
    }
  }


  const tabs = () => {
    const t = props.tabs.map((tab) => {
      return <Tab label={tab} {...a11yProps(props.tabTitle,0)} />
    })
    return t;
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="action tabs example"
      >
        {tabs()}
      </Tabs>

    </div>
  );
}
