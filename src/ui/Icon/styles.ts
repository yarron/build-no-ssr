import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => (
  {
    icon: {
      fill: 'currentColor',
    },
    iconDisabled: {
      opacity: 0.2,
    },
  }
));

export default useStyles;
