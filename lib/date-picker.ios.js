import React, { Component } from 'date-picker';
import MODES from '../config/modes';

class DatePicker extends Component
{
    static get propTypes () {
        return {
            value: React.PropTypes.number,
            minDate: React.PropTypes.number,
            maxDate: React.PropTypes.number,
            mode: React.PropTypes.string,
            onDateChange: React.PropTypes.func,
            textFieldStyle: React.PropTypes.object
        };
    }

    render () {
        return (
            <TextInput
                style={this.props.textFieldStyle}
                onFocus={this._show}
            />
        );
    }
}

export default DatePicker;
