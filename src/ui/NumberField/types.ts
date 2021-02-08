import { FocusEvent, KeyboardEvent, ChangeEvent } from 'react';
import NumberFormat from 'react-number-format';

export interface IProps {
  disabled?: boolean;
  placeholder?: string;
  value: string | number | boolean | undefined;
  type: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface NumberFormatCustomIProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  customType: string;
  value: string;
}
