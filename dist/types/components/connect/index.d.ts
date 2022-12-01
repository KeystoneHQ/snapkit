/// <reference types="react" />
interface ConnectProps {
    name?: string;
    logo?: JSX.Element;
    open: boolean;
    loading?: boolean;
    connected?: boolean;
    onConnect?(): void;
    onGetAddress?(): void;
    onClose(): void;
    children?: JSX.Element | JSX.Element[];
}
export declare function isBrowserSupport(ua: string): boolean;
export declare function Connect({ name, logo, open, loading, connected, onConnect, onGetAddress, onClose, children }: ConnectProps): JSX.Element;
export declare namespace Connect {
    var Install: typeof import("./Install").Install;
    var Connecting: typeof import("./Connecting").Connecting;
    var Address: typeof import("./Address").Address;
}
export {};
//# sourceMappingURL=index.d.ts.map