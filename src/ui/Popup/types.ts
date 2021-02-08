import { ReactNode } from 'react';

export interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    actionsComponent?: ReactNode;
}
