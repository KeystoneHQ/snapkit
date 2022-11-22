import { ReactNode } from 'react';
export interface BaseTransactionInfoProps {
    icon: ReactNode;
    title: ReactNode;
    amount: ReactNode;
    label?: string;
    content?: string;
    datetime?: string;
    className?: string;
    bodyClassName?: string;
    onClick?: () => void;
}
export declare function BaseTransactionInfo({ icon, title, amount, label, content, datetime, onClick, className, bodyClassName }: BaseTransactionInfoProps): JSX.Element;
//# sourceMappingURL=base.d.ts.map