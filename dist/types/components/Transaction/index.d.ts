import { ReactElement } from 'react';
export interface TransactionInfoProps {
    icon: ReactElement;
    typeText: string;
    balance: number;
    balanceClassName?: string;
    addressPrefix: string;
    address: string;
    datetime: Date;
    onClick?: () => void;
}
export declare function TransactionInfo({ icon, typeText, balance, balanceClassName, addressPrefix, address, datetime, onClick }: TransactionInfoProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map