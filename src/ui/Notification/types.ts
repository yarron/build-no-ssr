export interface IProps {
  type?: 'error' | 'warning' | 'info' | 'success';
  isOpen?: boolean;
  onClose?: () => void;
  message?: string;
  delay?: number;
  index?: number;
}
