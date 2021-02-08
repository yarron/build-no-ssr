import { makeStyles, Theme, createMuiTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  select: {
    width: 140,
    marginLeft: theme.spacing(2),
    '& p': {
      display: 'none',
    },
  },
  selectBtn: {
    marginRight: -9,
  },
  calendar: {
    display: 'none',
  },
}));

export const materialTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#05ad78',
      dark: '#05ad78',
    },
  },
});

export default useStyles;
