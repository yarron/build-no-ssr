export interface IProps {
  date: Date;
  dateRange: Date[];
  onAccept: (date: Date) => void;
}
