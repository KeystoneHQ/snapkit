import React, { ReactNode } from 'react';
export interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size?: 'large' | 'medium' | 'small' | null;
    tagName?: string;
    className?: string;
    loading?: boolean;
    loadingIcon?: ReactNode;
    children?: string | JSX.Element | JSX.Element[];
    icon?: ReactNode;
    suffix?: ReactNode;
    onClick?: () => void;
    [propName: string]: unknown;
}
export declare function Button({ primary, disabled, size, tagName, className, loading, loadingIcon, children, icon, suffix, onClick, ...args }: ButtonProps): React.DOMElement<{
    className: string;
    disabled: boolean;
    onClick: () => void;
}, Element>;
//# sourceMappingURL=Button.d.ts.map