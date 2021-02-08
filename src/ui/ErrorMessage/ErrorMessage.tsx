import React, { FC } from 'react';
import { IProps } from './types';

const ErrorMessage: FC<IProps> = ({ message }) => (
  <div>
    Error!
    {message}
  </div>
);

export default ErrorMessage;
