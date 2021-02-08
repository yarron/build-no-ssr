import React, { FC } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { IProps } from './types';

const Popup: FC<IProps> = ({
  isOpen, onClose, title, children, actionsComponent,
}) => {
  const classes = useStyles();
  return (
    <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={isOpen}>
      {!!title && (
        <DialogTitle id="customized-dialog-title" disableTypography className={classes.root}>
          <Typography variant="h6">{title}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
      )}
      <DialogContent dividers className={classes.root}>
        {children}
      </DialogContent>
      {!!actionsComponent && (
        <DialogActions className={classes.actions}>
          {actionsComponent}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Popup;
