# Button
The button is used to trigger na action or event, such as submitting form, opening dialog, cancelling an action, or performing a delete operation.

## Import
```js
import { IButton } from 'istilo-css/vue';
```

## Usage
```html
<i-button
    :color="'primary'">
    Button
</i-button>
```

## Button Size
Use the **:size** prop to change the size of the button. You can set the value to small or large.

```html
<i-button
    :size="'small'">
    Button
</i-button>

<i-button
    :size="'large'">
    Button
</i-button>
```

## Button Color
Use the **:color** prop to change the visual style of the button. You can set the value to default, primary, secondary, success, warning, danger.

```html
<i-button>
    Button
</i-button>

<i-button
    :color="'primary'">
    Button
</i-button>

<i-button
    :color="'secondary'">
    Button
</i-button>

<i-button
    :color="'success'">
    Button
</i-button>

<i-button
    :color="'warning'">
    Button
</i-button>

<i-button
    :color="'danger'">
    Button
</i-button>
```

## Props
| Name       | Type    | Values                                                | Default   | Description                                                                   |
| ---------- | ------- | ----------------------------------------------------- | --------- | ----------------------------------------------------------------------------- |
| color      | string  | `primary`, `secondary`, `success`, `warning`, `danger` | default   | The color of the button, Use a color key passed in colors variable.           |
| disabled   | boolean | `true` or `false`                                      | `false`   | Disabled the click event and color.                                          |
| icon       | string  |                                                       |           | The icon besides of the label, used the icon key passed in icons component.   |
| fullWidth  | boolean | `true` or `false`                                      |           | Make the button full width based on the parent width.                         |
| ghost      | boolean | `true` or `false`                                      |           | Remove the background of the button and make the border outline dashed style. |
| href       | string  |                                                       |           | Convert the button into anchor.                                                |
| loading    | boolean | `true` or `false`                                      | `false`   | This will change the button label into icon spinner if it is set to `true`.   |
| outline    | boolean | `true` or false                                        | `false`   | This will make the button remove the background and add a border.             |
| size       | string  | `small`, `large`                                       | `false`   | Change the dimension of the button.                                           |
| text       | string  | `Button`                                               |           | The label of the button.                                                      |
