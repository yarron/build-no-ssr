export interface IProps {
  date: Date | undefined;
  onAccept: (date: Date|null) => void;
  id: string;
  placeholder?: string;
  minDate: Date;
  maxDate: Date;
  className?: string;
  disableFuture?: boolean;
  disabled?: boolean;
}
