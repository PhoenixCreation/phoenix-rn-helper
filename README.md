# phoenix-rn-helper

`Notice`: Some components relias on the some specific packages. Make sure to install them first to thimgs to work. Full list of packages can be found [here.](#external-packages)

## index

1. [Divider](#Divider)
2. [ColorSelector](#ColorSelector)

## Divider

This Component adds the pure line throughout the whole width.
Example:

```
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

```
<ColorSelector
    value={flowerColor}
    onChange={(color) => setFlowerColor(color)}
    style={{
        // Additional styles
    }}
/>
```

Screenshot: TODO://

| Option   | Type            | Required | Default                              | Description                                            |
| -------- | --------------- | -------- | ------------------------------------ | ------------------------------------------------------ |
| value    | Color String    | Yes      | None                                 | The value to represent color                           |
| onChange | Function: color | No?      | None                                 | Function to be called each time color changes          |
| style    | style object    | No       | 30x30 square with some border radius | A style object to change the appearance of the button. |

Although style prop is allowed, backgroundColor will always be current color value.

## External-packages

- react-native-color-picker (ColorSelector)
