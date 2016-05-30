# tsjing-date-picker
React Native DatePicker for iOS and Android

## Installation
```
npm i --save --save-exact tsjing-date-picker
```

## Properties
Note: all timestamps are ms-based

| Property | Type | Description |
|:----:|---|---|
|value|Number (timestamp)|Current date value of the date picker|
|minDate|Number (timestamp)|Minimum date that can be selected|
|maxDate|Number (timestamp)|Maximum date that can be selected|
|mode|String|iOS only: 'date', 'time' or 'datetime'|
|onDateChange|Function|Fires when the selected date changed, param: datetime as timestamp|
|textFieldStyle|Object|Additional styling for the input box|
|initialDate|Number (timestamp)|Initial date|

## Todo
* More testing
* Placeholders
* Examples

![Tsjing logo](./tsjing-logo.png)