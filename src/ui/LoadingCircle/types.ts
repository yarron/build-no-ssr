import { CircularProgressProps } from '@material-ui/core/CircularProgress';

export interface IProps {
    isLoading: boolean;
    size?: number;
    classes?: CircularProgressProps['classes'];
}
