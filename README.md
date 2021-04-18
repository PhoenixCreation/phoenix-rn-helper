# phoenix-rn-helper

`Notice`: Some components relias on the some specific packages. Make sure to install them first to things to work. Full list of packages can be found [here.](#external-packages)

## index

1. [Divider](#Divider)
2. [ColorSelector](#ColorSelector)
3. [CheckBox](#CheckBox)

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

This component is simple checkbox. By default it gives retro ✔️ and ❌ vibe. But it is completely customizable.

Example:

```js
<CheckBox
  value={check}
  onChange={(e) => setCheck(e)}
  boxStyle={
    {
      /* main box styling */
    }
  }
  TrueComponent={/* Any React-Native component */}
  FalseCoponent={/* Any React-Native component */}
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

## External-packages

- react-native-color-picker (ColorSelector)
