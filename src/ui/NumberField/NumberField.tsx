import React, { useState, FocusEvent, FC } from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { NumberFormatCustomIProps, IProps } from './types';

const NumberFormatCustom: FC<NumberFormatCustomIProps> = (props) => {
  const {
    inputRef, onChange, customType, onBlur, onFocus, onKeyDown, ...other
  } = props;

  const options: Record<string, undefined | string> = {
    prefix: undefined,
    suffix: undefined,
    format: undefined,
  };

  switch (customType) {
    case 'percent':
      options.suffix = '%';
      options.format = '###%';
      break;
    case 'currency':
      options.prefix = '$';
      break;
    default:
  }

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        if (onChange) {
          onChange({
            target: {
              value: values.value,
            },
          } as never);
        }
      }}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      thousandSeparator
      decimalSeparator="."
      isNumericString
      prefix={options.prefix}
      suffix={options.suffix}
      format={options.format}
    />
  );
};

const NumberField: FC<IProps> = ({
  placeholder, value, onChange, type, onKeyDown, onBlur, onFocus, disabled,
}) => {
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <TextField
      disabled={disabled}
      autoFocus={autoFocus}
      value={value}
      placeholder={placeholder}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={onKeyDown}
      InputProps={{
        inputComponent: (props) => <NumberFormatCustom
          {...props}
          inputRef={props.inputRef}
          value={props.value}
          customType={type}
          onChange={onChange}
        /> as never,
      }}
    />
  );

  function handleFocus(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setAutoFocus(true);

    if (onFocus) {
      onFocus(event);
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setAutoFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  }
};

export default NumberField;
