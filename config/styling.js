import { StyleSheet, Dimensions } from 'react-native';

function generateStyleSheet () {
    const { height } = Dimensions.get('window');

    const WHITE = '#ffffff';
    const OVERLAY_BACKGROUND = 'rgba(255,255,255,0.8)';
    const FONT_COLOR = '#666666';

    const PIXEL_RATIO = height / 480;

    const FONT_SIZE_14 = 14 * PIXEL_RATIO;
    const BUTTON_HEIGHT = 50 * PIXEL_RATIO;
    const TEXTFIELD_HEIGHT = 20 * PIXEL_RATIO;
    const TEXTFIELD_WIDTH = 200 * PIXEL_RATIO;
    const TEXTFIELD_PADDING = 5 * PIXEL_RATIO;

    return StyleSheet.create({
        overlay: {
            backgroundColor: OVERLAY_BACKGROUND,
            flex: 1
        },
        textField: {
            height: TEXTFIELD_HEIGHT,
            padding: TEXTFIELD_PADDING,
            width: TEXTFIELD_WIDTH,
            backgroundColor: WHITE
        },
        grid: {
            flex: 1,
            justifyContent: 'space-around'
        },
        bottomButton: {
            flexDirection: 'row',
            height: BUTTON_HEIGHT,
            backgroundColor: WHITE,
            alignItems: 'center',
            justifyContent: 'center'
        },
        bottomButtonText: {
            color: FONT_COLOR,
            fontSize: FONT_SIZE_14
        }
    });
}

export default generateStyleSheet;