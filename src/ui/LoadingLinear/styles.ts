import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => (
  {
    root: {
      width: '100%',
      height: '5px',
      '& > *': {
        height: '5px',
      },
    },
  }
));

export default useStyles;
