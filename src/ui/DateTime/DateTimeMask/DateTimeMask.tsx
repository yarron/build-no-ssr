import React, { FC } from 'react';
import MaskedInput from 'react-text-mask';
import { IProps } from './types';

const DateTimeMask: FC<IProps> = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/]}
      placeholderChar="_"
      showMask={false}
    />
  );
};

export default DateTimeMask;
