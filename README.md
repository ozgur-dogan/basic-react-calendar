# basic-react-calendar

> Basic Calendar Component for React.js

[![NPM](https://img.shields.io/npm/v/basic-react-calendar.svg)](https://www.npmjs.com/package/basic-react-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save basic-react-calendar
```

## Usage

```javascript
<Calendar
  initialDay={new Date()}
  width={width}
  height={height}
  onDateSelect={selectedDate => {
    console.log(selectedDate);
  }}
/>
```

## Parameters

| Prop              | Required | Type          | Description                                            |
| ----------------- | -------- | ------------- | ------------------------------------------------------ |
| height            | True     | Number or "%" | Width of the Calendar                                  |
| width             | True     | Number or "%" | Height of the Calendar                                 |
| onDateSelect      | True     | Fn (date)     | Function called on date select. Date obj will be given |
| initialDay        | False    | Date          | Initial Day of the Calendar (now is default)           |

## License

MIT © [ozgur-dogan](https://github.com/ozgur-dogan)
