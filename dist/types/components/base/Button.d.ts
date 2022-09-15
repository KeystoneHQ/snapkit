import React, { ReactNode } from 'react';
export interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size?: 'large' | 'medium' | 'small' | null;
    tagName?: string;
    className?: string;
    loading?: boolean;
    children?: JSX.Element | JSX.Element[];
    icon?: ReactNode;
    suffix?: ReactNode;
    [propName: string]: unknown;
}
export declare function Button({ primary, disabled, size, tagName, className, loading, children, icon, suffix, ...args }: ButtonProps): React.ReactElement<{
    className: string;
    disabled: boolean;
}, string | React.JSXElementConstructor<any>>;
//# sourceMappingURL=Button.d.ts.map