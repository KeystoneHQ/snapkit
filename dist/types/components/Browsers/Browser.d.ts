import "./Browser.scss";
import { ReactNode } from "react";
export interface BrowserInfo {
    icon: ReactNode;
    name: string;
    link: string;
}
export declare const BrowsersList: BrowserInfo[];
export interface BrowsersProps {
    open: boolean;
    list: ('firefox' | 'chrome' | 'brave' | 'edge' | 'opera' | string & {})[];
    close?: () => void;
}
export declare const Browsers: ({ open, list, close }: BrowsersProps) => JSX.Element;
//# sourceMappingURL=Browser.d.ts.map