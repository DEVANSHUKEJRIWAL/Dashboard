// src/components/Layout.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon, TableChart as TableChartIcon, BarChart as BarChartIcon, CalendarToday as CalendarIcon, Dashboard as KanbanIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const Layout = ({ children, darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="default" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon><TableChartIcon /></ListItemIcon>
            <ListItemText primary="Tables" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CalendarIcon /></ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><KanbanIcon /></ListItemIcon>
            <ListItemText primary="Kanban Board" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
