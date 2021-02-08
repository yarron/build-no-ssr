import React, { FC } from 'react';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';
import IconButtonUI from '@material-ui/core/IconButton';
import IconUI from '@mdi/react';

import useStyles from './styles';
import { IProps } from './types';

const IconButton: FC<IProps> = ({
  title, path, disabled, classNameWrap, size, children, ...other
}) => {
  const classes = useStyles();
  let sizeIcon = 1;

  if (size === 'small') {
    sizeIcon = 0.7;
  }

  return (
    <>
      {title && !disabled ? (
        <span className={classNameWrap}>
          <Tooltip title={title}>
            {getInnerButton()}
          </Tooltip>
        </span>
      ) : (
        <span className={classNameWrap}>
          {getInnerButton()}
        </span>
      )}
    </>
  );

  function getInnerButton() {
    return (
      <span>
        <IconButtonUI aria-label={title} size={size || 'medium'} disabled={disabled} {...other} component="span">
          {children || (
          <IconUI
            className={clsx(classes.icon, { [classes.iconDisabled]: disabled })}
            path={path as never}
            size={sizeIcon}
          />
          )}
        </IconButtonUI>
      </span>

    );
  }
};

export default IconButton;
