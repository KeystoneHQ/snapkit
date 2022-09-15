/// <reference types="react" />
import { TransactionType } from './base';
export { TransactionType } from './base';
export interface TransactionInfoProps {
    type: TransactionType;
    balance: number;
    address: string;
    datetime: Date;
    className?: string;
    bodyClassName?: string;
    onClick?: () => void;
}
export declare function TransactionInfo({ type, balance, address, datetime, onClick, className, bodyClassName }: TransactionInfoProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map