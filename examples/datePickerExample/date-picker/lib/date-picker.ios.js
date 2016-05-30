import React, { Component } from 'react';
import { TextInput, Modal, DatePickerIOS, View, Text, TouchableOpacity } from 'react-native';
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
            textFieldStyle: React.PropTypes.object,
            initialDate: React.PropTypes.number
        };
    }

    componentWillMount () {
        this.state = {
            showPicker: false,
            initialDate: this.props.initialDate ? new Date(this.props.initialDate) : null,
            value: typeof this.props.value === 'number' ? new Date(this.props.value) : null
        };
    }

    componentWillReceiveProps (newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({
                value: typeof this.props.value === 'number' ? new Date(this.props.value) : null
            });
        }
    }

    _showPicker () {
        this.setState({
            showPicker: true
        });
    }

    _hidePicker () {
        this.setState({
            showPicker: false
        });
    }

    _handleDateChange (dateTime) {
        this.setState({
            value: dateTime
        });

        if (typeof this.props.onDateChange === 'function') {
            this.props.onDateChange(dateTime.getTime())
        }
    }

    render () {
        return (
            <View>
                <TouchableOpacity
                    onPress={this._showPicker.bind(this)}
                >
                    <TextInput
                        key="date-picker-text-input"
                        style={this.props.textFieldStyle || { width: 200, height: 50, backgroundColor: '#ffffff' }}
                        value={this.state.value ? this.state.value.toDateString() : this.props.placeholder}
                        editable={false}
                    />
                </TouchableOpacity>

                <Modal
                    key="date-picker-modal"
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showPicker}
                >
                    <View
                        style={{ backgroundColor: 'rgba(255,255,255,0.8)', flex: 1 }}
                    >
                        <View
                            style={{ flex: 1, justifyContent: 'space-around' }}
                        >
                            <DatePickerIOS
                                date={this.state.value || this.state.initialDate || new Date()}
                                mode={this.props.mode || MODES.MODE_DATE}
                                minimumDate={this.props.minDate ? new Date(this.props.minDate) : null}
                                maximumDate={this.props.maxDate ? new Date(this.props.maxDate) : null}
                                onDateChange={this._handleDateChange.bind(this)}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={this._hidePicker.bind(this)}
                        >
                            <View
                                style={{ flexDirection: 'row', height: 50, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text
                                    style={{ color: '#666' }}
                                >
                                    OK
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default DatePicker;
