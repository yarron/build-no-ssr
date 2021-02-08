import React, { FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import { IProps } from './types';

const LoadingCircle: FC<IProps> = ({ isLoading, ...restProps }) => {
  const classes = useStyles();

  return (
    <div className={restProps?.classes?.root || classes.root}>
      {!!isLoading && <CircularProgress {...restProps} disableShrink color="secondary" classes={{ ...classes, ...restProps?.classes }} />}
    </div>
  );
};

export default LoadingCircle;
