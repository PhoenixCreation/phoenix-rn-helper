declare module 'phoenix-rn-helper'{
    import * as React from "react"
    import * as ReactNative from "react-native"

    export interface DividerProps {
        /**
         * defines the height of Divider.
         * 
         * @deafault StyleSheet.hairlineWidth which is very thin
         */
        size?: number;

        /**
         * defines the color of the Divider
         * 
         * @default grey
         */
        color?: string;

        /**
         * defines the space left on both the end from end of the object
         * 
         * @default 0
         */
        margin?: number;
    }

    export interface ColorSelectorProps {
        /**
         * The value of the color to start with
         */
        value: string;

        /**
         * Function to assign to listen to change of color
         */
        onChange: (color: string) => void;

        /**
         * style object to modify the default styling of the representing box.
         * 
         * @default {
                width: 30,
                height: 30,
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                marginRight: 5,
            }
         */
        style?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    }

    export interface CheckBoxProps {
        /**
         * Boolean value to control the checkbox
         */
        value: boolean;

        /**
         * Function that will be called with updated boolean value
         */
        onChange: (value: boolean) => void;

        /**
         * Outer Box styling. 
         * 
         * `Advice` Keep in mind that deafult style will be applied first and then custom style
         */
        boxStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;

        /**
         * Component to render when checkbox value is `true`.
         * 
         * @default ✔️
         */
        TrueComponent?: React.Component<any>;

        /**
         * Component to render when checkbox value is `false`.
         * 
         * @default ❌
         */
        FalseCoponent?: React.Component<any>;
    }

    export interface ThemeTogglerProps {
        /**
         * value that contains current theme value.
         * 
         * `Warning` It should only contain `"light"` or `"dark"`.
         */
        value: "light" | "dark";

        /**
         * Function that will be called each time theme changes.
         */
        onChange: (value: "light" | "dark") => void;

        /**
         * 	Duration of animation. In millisecond.
         * 
         *  @default 100
         */
        duration?: number;

        /**
         * Style object for main container.
         * 
         * `Advice`: Make sure to have proper backgroundColor reltive to `sunColor` and `moonColor`
         * 
         * @default { 
         * width: 60, 
         * height: 60, 
         * borderRadius: 100, 
         * backgroundColor: "#2155ff", 
         * padding: 5, 
         * alignItems: "center", 
         * justifyContent: "center" 
         * }
         */
        boxStyle?: ReactNative.StyleProp<ReactNative.ViewStyle>;

        /**
         * Color of sun (light theme indicator).
         * 
         * @default #fff
         */
        sunColor?: string;

        /**
         * Color of moon (dark theme indicator)
         * 
         * @default #fff
         */
        moonColor?: string;
    }

    export interface TouchHereProps {
        /**
         * X cordination of touch to be shown
         */
        x: number;

        /**
         * Y cordination of touch to be shown
         */
        y: number;

        /**
         * The control variable to show the modal.
         * 
         * `Advice`: Recomended to set true in start and use delay prop to adjust timing.
         */
        visible: boolean;

        /**
         * Function that will be called on closing of component.
         * 
         * @required for android
         */
        onRequestClose: () => void;

        /**
         * Duration of the whole animation includes both hand down and waves so make sure to have higher value. In millisecond.
         * 
         * @default 3500
         */
        duration?: number;

        /**
         * 	How much time after animation should be shown.
         * 
         *  `Advice`: Generally you want to wait for the user to touch on desired location and if not touched then show this so you can use `delay` property for that.
         * 
         *  @default 0
         */
        delay?: number;

        /**
         * Color of hand. It is just outline like color. Whole hand won't be filled with this color because it is better to show as much as background to user as possible
         * 
         * @default #fff
         */
        handColor?: string;

        /**
         * Color of waves. Currently 2 waves will be shown.
         * 
         * @default #fff
         */
        ringColor?: string;
    }

    export const Divider: React.FunctionComponent<DividerProps>;
    export const ColorSelector: React.FunctionComponent<ColorSelectorProps>;
    export const CheckBox: React.FunctionComponent<CheckBoxProps>;
    export const ThemeToggler: React.FunctionComponent<ThemeTogglerProps>;
    export const TouchHere: React.FunctionComponent<TouchHereProps>;
}