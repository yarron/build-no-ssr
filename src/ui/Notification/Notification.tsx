import React, { FC } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { IProps } from './types';
import getStyles from './styles';

const Notification: FC<IProps> = ({
  type = 'error',
  isOpen = false,
  onClose = () => undefined,
  message = 'No message',
  delay = 5000,
}) => {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={delay} onClose={handleClose()}>
        <Alert
          onClose={handleClose()}
          severity={type}
          elevation={6}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );

  function handleClose() {
    return (_?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      onClose && onClose();
    };
  }
};

export default Notification;
