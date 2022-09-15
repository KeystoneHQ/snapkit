import { ReactElement } from 'react';
export declare enum TransactionType {
    SEND = "Send",
    RECEIVED = "Received"
}
export interface BaseTransactionInfoProps {
    icon: ReactElement;
    typeText: string;
    balance: number;
    balanceClassName?: string;
    addressPrefix: string;
    address: string;
    datetime: Date;
    className?: string;
    bodyClassName?: string;
    onClick?: () => void;
}
export declare function BaseTransactionInfo({ icon, typeText, balance, balanceClassName, addressPrefix, address, datetime, onClick, className, bodyClassName }: BaseTransactionInfoProps): JSX.Element;
//# sourceMappingURL=base.d.ts.map