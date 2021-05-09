declare module 'phoenix-rn-helper'{
    import * as React from "react"

    export interface DividerProps {
        size?: number;
        color?: string;
        margin?: number;
    }

    export const Divider: React.FunctionComponent<DividerProps>;
}