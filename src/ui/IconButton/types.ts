import { MouseEvent } from 'react';

export interface IProps {
    path?: string;
    size?: 'medium' | 'small';
    title?: string;
    disabled?: boolean;
    className?: string;
    classNameWrap?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
    children?: React.ReactElement;
  }
