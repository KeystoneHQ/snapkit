/// <reference types="react" />
import { TransactionType } from './base';
export { TransactionType } from './base';
export interface TransactionInfoProps {
    type: TransactionType;
    amount: number;
    address: string;
    datetime: Date;
    className?: string;
    bodyClassName?: string;
    loading?: boolean;
    onClick?: () => void;
}
export declare function TransactionInfo({ type, amount, address, datetime, onClick, className, bodyClassName, loading }: TransactionInfoProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map