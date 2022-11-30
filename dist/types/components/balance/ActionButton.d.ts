import { ReactNode } from 'react';
export interface ActionButtonProps {
    icon: ReactNode;
    size?: string;
    borderRadius?: string;
    onClick?: () => void;
    loading?: boolean;
}
export declare function ActionButton({ icon, size, borderRadius, loading, onClick }: ActionButtonProps): JSX.Element;
//# sourceMappingURL=ActionButton.d.ts.map