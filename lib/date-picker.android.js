import React, { Component } from 'react';
import { View, TouchableOpacity, Text, DatePickerAndroid } from 'react-native';
import MODES from '../config/modes';
import generateStyleSheet from '../config/styling';

class DatePicker extends Component
{
    static get propTypes () {
        return {
            value: React.PropTypes.number,
            minDate: React.PropTypes.number,
            maxDate: React.PropTypes.number,
            mode: React.PropTypes.string,
            onDateChange: React.PropTypes.func,
            textFieldStyle: React.PropTypes.object,
            initialDate: React.PropTypes.number
        };
    }

    componentWillMount () {
        this.styles = generateStyleSheet();
        this.state = {
            initialDate: this.props.initialDate ? new Date(this.props.initialDate) : null,
            value: typeof this.props.value === 'number' ? new Date(this.props.value) : null
        };
    }

    componentWillReceiveProps (newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({
                value: typeof newProps.value === 'number' ? new Date(newProps.value) : null
            });
        }
    }

    _closePicker (props) {
        const { day, month, year, action } = props;

        if (action !== DatePickerAndroid.dismissedAction) {
            const date = new Date(year, month, day)

            this.setState({
                value: date
            });

            if (typeof this.props.onDateChange === 'function') {
                this.props.onDateChange(date.getTime())
            }
        }
    }

    _showPicker () {
        DatePickerAndroid
            .open({
                date: new Date(this.state.value || this.state.intialDate || Date.now()),
                minDate: this.props.minDate ? new Date(this.props.minDate) : null,
                maxDate: this.props.maxDate ? new Date(this.props.maxDate) : null,
                spinnerMode: this.props.spinnerMode ? true : false
            })
            .then(this._closePicker.bind(this))
    }

    render () {
        const additionalStyling = {};

        if (typeof this.props.placeholderTextColor && !this.state.value) {
            additionalStyling.color = this.props.placeholderTextColor;
        }

        return (
            <TouchableOpacity
                onPress={this._showPicker.bind(this)}
            >
                <Text
                    key="date-picker-text-input"
                    style={[this.styles.textField, this.props.textFieldStyle, additionalStyling]}
                    onFocus={function () { console.warn('this', this) }}
                >
                    {this.state.value ? this.state.value.toDateString() : this.props.placeholder}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default DatePicker;
