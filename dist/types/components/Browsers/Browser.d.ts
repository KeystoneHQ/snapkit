import { ModalProps } from "semantic-ui-react";
import "./Browser.scss";
import { CSSProperties, ReactNode } from "react";
export interface BrowserInfo {
    icon: ReactNode;
    name: string;
    link: string;
}
export declare const BrowsersList: BrowserInfo[];
export interface BrowsersProps extends ModalProps {
    open: boolean;
    list: ('firefox' | 'chrome' | 'brave' | 'edge' | 'opera' | string & {})[];
    close?: () => void;
    className?: string;
    style?: CSSProperties;
}
export declare const Browsers: ({ open, list, close, style, className, ...args }: BrowsersProps) => JSX.Element;
//# sourceMappingURL=Browser.d.ts.map