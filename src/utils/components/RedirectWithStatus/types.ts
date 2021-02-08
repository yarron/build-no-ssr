import { RedirectProps } from 'react-router';

export interface RedirectWithStatusProps extends RedirectProps {
  code?: number;
}
