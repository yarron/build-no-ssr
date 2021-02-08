import { makeStyles, Theme } from '@material-ui/core';

const collapseWidth = 0;
const drawerWidth = 240;
const drawerWidthClosed = 72;
const drawerWidthClosedMin = 62;

interface IProps {
  fullScreen?: boolean;
  open?: boolean;
  mqFullHD?: boolean;
}

const handleWidthCalc = ({ mqFullHD }: IProps, min: number, max: number) => (mqFullHD ? max : min);

const useStyles = makeStyles((theme: Theme) => ({
  scrollBar: {
    '& ::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
      color: theme.palette.primary.main,
    },
    /* Track */
    '& ::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px',
    },
    /* Handle */
    '& ::-webkit-scrollbar-thumb': {
      background: theme.palette.secondary.dark,
      borderRadius: '10px',
    },
    /* Handle on hover */
    '& ::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.secondary.main,
    },
    '& ::-webkit-scrollbar-corner': {
      background: theme.palette.secondary.main,
    },
  },
  main: {
    width: (props: IProps) => `calc(100% - ${props.fullScreen
      ? collapseWidth
      : handleWidthCalc(props, drawerWidthClosedMin, drawerWidthClosed)
    }px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  mainOpen: {
    width: (props: IProps) => `calc(100% - ${props.fullScreen ? collapseWidth : drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  mainAuth: {
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginLeft: theme.spacing(0.8),
    [theme.breakpoints.up('xl')]: {
      marginLeft: theme.spacing(1.5),
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    marginLeft: (props: IProps) => (props.open ? theme.spacing(2) : 0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  titleWrap: {
    paddingLeft: theme.spacing(0.8),
    [theme.breakpoints.up('xl')]: {
      paddingLeft: theme.spacing(1.2),
    },
    paddingRight: theme.spacing(1.2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    border: 'none',
    backgroundColor: '#363742',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: (props: IProps) => (props.fullScreen ? collapseWidth : `${handleWidthCalc(props, drawerWidthClosedMin, drawerWidthClosed)}px`),
  },
  drawerCollapse: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: collapseWidth,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  columnWrap: {
    flexDirection: 'column',
  },
  columnIcon: {
    marginLeft: '30px',
  },
  columnIconFull: {
    marginLeft: '8px',
  },
  columnText: {
    fontSize: '8px',
    lineHeight: '20px',
    textAlign: 'center',
    letterSpacing: '0.25px',
    color: 'currentColor',
    mixBlendMode: 'normal',
  },
  activeIcon: {
    fill: theme.palette.secondary.main,
  },
  activeText: {
    color: theme.palette.secondary.main,
  },
  notActiveWrap: {
    opacity: 0.68,
    '&$disabled': {
      opacity: 0.1,
    },
  },
  disabled: {},
}));

export default useStyles;
