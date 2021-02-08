import LayoutContext from '@/context/layout';
import React, {
  FC, useState, useMemo, useCallback,
} from 'react';
import {
  useHistory, useLocation,
} from 'react-router-dom';

import IconButtonUI from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles';

const Layout: FC = ({ children }) => {
  // hooks route
  const history = useHistory();
  const { pathname } = useLocation();

  // hooks state
  const [open, setOpen] = useState(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  // hooks theme
  const theme = useTheme();
  const mqFullHD = useMediaQuery(theme.breakpoints.up('xl'));

  // hooks memo
  const memoMqFullHD = useMemo(() => mqFullHD, [mqFullHD]);

  // hooks callback
  const callbackDrawer = useCallback(handleDrawer, [open, setOpen]);
  const callbackRoute = useCallback(handleRoute, [history]);

  // hooks styles
  const classes = useStyles({ fullScreen, open, mqFullHD: memoMqFullHD });

  // constants
  const path = pathname.split('/')[1];

  // component
  return (
    <LayoutContext.Provider value={{
      fullScreen, setFullScreen, open, setOpen,
    }}
    >
      {path !== 'sign-in' ? (
        <>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              [classes.drawerCollapse]: fullScreen,
              [classes.scrollBar]: true,
            })}
            classes={{
              paper: clsx(classes.drawerPaper, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                [classes.drawerCollapse]: fullScreen,
              }),
            }}
          >
            <List>
              <ListItem button onClick={callbackRoute('/screener')} alignItems="center" className={classes.titleWrap}>
                <Typography variant="h6" className={classes.title}>
                  APP
                </Typography>
              </ListItem>
            </List>
            <div className={classes.toolbar}>
              <IconButtonUI
                onClick={callbackDrawer}
                color="inherit"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButtonUI>
            </div>
          </Drawer>
          <main className={clsx({
            [classes.main]: !open,
            [classes.mainOpen]: open,
            [classes.scrollBar]: true,
          })}
          >
            {children}
          </main>
          <footer />
        </>
      ) : (
        <main className={classes.mainAuth}>{ children }</main>
      )}
    </LayoutContext.Provider>
  );

  function handleDrawer() {
    setOpen(!open);
  }

  function handleRoute(route: string) {
    return () => {
      history.push(route);
    };
  }
};

export default Layout;
