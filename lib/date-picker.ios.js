import React, { Component } from 'react';
import { TextInput, Modal, DatePickerIOS } from 'react-native';
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

    componentWillMount () {
        this.state = {
            showPicker: false,
            value: new Date(this.props.value)
        };
    }

    componentWillReceiveProps (newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({
                value: new Date(newProps.value)
            });
        }
    }

    _showPicker () {
        this.setState({
            showPicker: true
        });
    }

    _handleDateChange (dateTime) {
        this.setState({
            value: dateTime
        })
    }

    render () {
        return (
            <View>
                <TextInput
                    key="date-picker-text-input"
                    style={this.props.textFieldStyle}
                    onFocus={this._showPicker}
                    value={this.state.value.toDateString()}
                />
                <Modal
                    key="date-picker-modal"
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showPicker}
                >
                    <DatePickerIOS
                        date={this.state.value}
                        mode={this.props.mode}
                        minimumDate={this.props.minDate}
                        maximumDate={this.props.maxDate}
                        onDateChange={this._handleDateChange.bind(this)}
                    />
                </Modal>
            </View>
        );
    }
}

export default DatePicker;
