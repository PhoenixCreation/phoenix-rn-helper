# phoenix-rn-helper

`Notice`: Some components relias on the some specific packages. Make sure to install them first to things to work. Full list of packages can be found [here.](#external-packages)

## index

1. [Divider](#Divider)
1. [ColorSelector](#ColorSelector)
1. [CheckBox](#CheckBox)
1. [ThemeToggler](#ThemeToggler)
1. [TouchHere](#TouchHere)

## Divider

This Component adds the pure line throughout the whole width.
Example:

```js
<Divider size={2} color="black" margin={10} />
```

Screenshot TODO://

| Option | Type   | Required | Default                              | Description                        |
| ------ | ------ | -------- | ------------------------------------ | ---------------------------------- |
| size   | Number | No       | StyleSheet.hairlineWidth (Very thin) | Height of Divider                  |
| color  | String | No       | grey                                 | Color of the Divider               |
| margin | Number | No       | 0                                    | Space left on both horizontal ends |

## ColorSelector

This component provides one little button alike which opens color pallate Model to choose color.

`Warning`: You need to install `react-native-color-picker` as a dependancies for this to work.

Example:

```js
<ColorSelector
  value={flowerColor}
  onChange={(color) => setFlowerColor(color)}
  style={
    {
      // Additional styles
    }
  }
/>
```

Screenshot: TODO://

| Option   | Type            | Required | Default                              | Description                                            |
| -------- | --------------- | -------- | ------------------------------------ | ------------------------------------------------------ |
| value    | Color String    | Yes      | None                                 | The value to represent color                           |
| onChange | Function: color | No?      | None                                 | Function to be called each time color changes          |
| style    | style object    | No       | 30x30 square with some border radius | A style object to change the appearance of the button. |

Although style prop is allowed, backgroundColor will always be current color value.

## CheckBox

This component is simple checkbox. By default it gives retro ?????? and ??? vibe. But it is completely customizable.

Example:

```js
<CheckBox
  value={check}
  onChange={(e) => setCheck(e)}
  boxStyle={{
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "black",
  }}
  TrueComponent={() => <Text>T</Text>}
  FalseCoponent={() => <Text>F</Text>}
/>
```

`Notice`: To render custom components ( TrueComponent & FalseComponent) You have to provide both component. Providing One component will result in default render.

Screenshot: TODO://

| Option         | Type                   | Required | Default                                                                                                                                                         | Description                                                                                    |
| -------------- | ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| value          | Boolean                | Yes      | none                                                                                                                                                            | The boolean value to control the checkbox                                                      |
| onChange       | Function: value        | Yes      | none                                                                                                                                                            | Function that will be called with updated boolean value                                        |
| boxStyle       | style object           | No       | `{ width: 30,height: 30,borderRadius: 10,backgroundColor: "lightgrey", borderWidth: 1, borderColor: "black", alignItems: "center", justifyContent: "center", }` | Outer Box styling. Keep in mind that deafult style will be applied first and then custom style |
| TrueComponent  | React-Native component | No       | none                                                                                                                                                            | Component to render when checkbox value is `true`                                              |
| FalseComponent | React-Native component | No       | none                                                                                                                                                            | Component to render when checkbox value is `false`                                             |

## ThemeToggler

This component provides theme toggler with smooth animation inspired from [Telegram](https://telegram.org)'s theme toggler button.

`Warning`: You need to install `react-native-svg` and `react-native-reanimated` (v2) as a dependancies for this to work.

Example:

```js
<ThemeToggler
  value={theme}
  onChange={(newTheme) => setTheme(newTheme)}
  boxStyle={{ backgroundColor: "blue" }}
  duration={700} // defaults to 1000(1 second)
  sunColor="#ff0"
  moonColor="#fff"
/>
```

Screenshot: TODO://

| Option    | Type                          | Required | Default                                                                                                                                | Description                                                                                                 |
| --------- | ----------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| value     | "light" \| "dark"             | Yes      | none                                                                                                                                   | String value that contains current theme value                                                              |
| onChange  | Function: ("light" \| "dark") | Yes      | none                                                                                                                                   | Function that will be called each time theme changes                                                        |
| duration  | Number                        | No       | 1000                                                                                                                                   | Duration of animation                                                                                       |
| boxStyle  | style object                  | No       | `{ width: 60, height: 60, borderRadius: 100, backgroundColor: "#2155ff", padding: 5, alignItems: "center", justifyContent: "center" }` | Style object for main container. Make sure to have proper backgroundColor reltive to sunColor and moonColor |
| sunColor  | Color                         | No       | #fff                                                                                                                                   | Color of sun (light theme indicator)                                                                        |
| moonColor | Color                         | No       | #fff                                                                                                                                   | Color of moon (dark theme indicator)                                                                        |

## TouchHere

> `Warning`: This component is not perfect. It is based on `Modal` component of react-native which is not that much good.

This component shows a hand indicating your user to that they have to touch here. This is generaly used on onboarding page but can be used anywhere.

> You have to provide absolute value of point to be shown to click. You generally want to use useLayout hook to calculate where your target element is. This is one of the drawback of this component. I might add custom component based but can't promise.

`Warning`: You need to install `react-native-svg` and `react-native-reanimated` (v2) as a dependancies for this to work.

Example:

```js
<TouchHere
  x={120}
  y={70}
  visible={touchIndicator}
  onRequestClose={() => setTouchIndicator(false)}
  duration={4000}
  delay={2000}
  handColor="white"
  ringColor="black"
/>
```

Screenshot: TODO://

| Option         | Type     | Required | Default | Description                                                                                                                                                                                  |
| -------------- | -------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible        | Boolean  | Yes      | none    | The control variable to show the modal. recomended to set true in start and use delay prop to adjust timing                                                                                  |
| onRequestClose | Function | Yes      | none    | Function that will be called on closing of component.                                                                                                                                        |
| x              | Number   | Yes      | 100     | X cordination of touch to be shown                                                                                                                                                           |
| y              | Number   | Yes      | 100     | Y cordination of touch to be shown                                                                                                                                                           |
| duration       | Number   | No       | 3500    | Duration of the whole animation includes both hand down and waves so make sure to have higher value                                                                                          |
| delay          | Number   | No       | 0       | How much time after animation should be shown. Generally you want to wait for the user to touch on desired location and if not touched then show this so you can use delay property for that |
| handColor      | Color    | No       | #fff    | Color of hand. It is just outline like color. Whole hand won't be filled with this color because it is better to show as much as background to user as possible                              |
| ringColor      | Color    | No       | #fff    | Color of waves. Currently 2 waves will be shown.                                                                                                                                             |

## External-packages

- react-native-color-picker (ColorSelector)
- react-native-reanimated@^2.1.0 (ThemeToggler, TouchHere)
- react-native-svg (ThemeToggler, TouchHere)

Quick all install

```
npm i react-native-color-picker react-native-reanimated react-native-svg
```

OR

```
yarn add react-native-color-picker react-native-reanimated react-native-svg
```
