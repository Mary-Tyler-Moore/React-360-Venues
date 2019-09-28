/**
 * @providesModule TourInfoButton.react
 */
'use strict';

import React from 'react';
import {Animated, Image, View, VrButton, asset} from 'react-360';
import TourTooltip from 'TourTooltip.react';

/**
 * On hover the InfoButton fades in a Tooltip component, and then fades it out
 * when the cursor leaves both the button and the Tooltip.
 */
class TourInfoButton extends React.Component {
  static defaultProps = {
    fadeIn: 500,
    fadeOut: 500,
    onInput: null,
    showOnLeft: false,
  };

  constructor(props) {
    super();
    this.state = {
      hasFocus: false,
      opacityAnim: new Animated.Value(0),
    };
  }

  _fadeIn = () => {
    Animated.timing(this.state.opacityAnim, {
      toValue: 1,
      duration: this.props.fadeIn,
    }).start();
    this.setState({hasFocus: true});
  };

  _fadeOut = () => {
    Animated.timing(this.state.opacityAnim, {
      toValue: 0,
      duration: this.props.fadeOut,
    }).start();
    this.setState({hasFocus: false});
  };

  render() {
    const {
      onInput,
      onClickSound,
      onEnterSound,
      onExitSound,
      onLongClickSound,
      tooltipType,
      showOnLeft,
      tooltip,
    } = this.props;

    let [height, width, source] =[0, 0, ''];
    if (tooltip.type === 'panelimage') {
      height = 60;
      width = 60;
      source = 'info_icon.png'
    } else {
      height = 250;
      width = 250;
      source = '2018.png'
    }
    return (
      <VrButton ignoreLongClick={true}
        onInput={onInput}
        onClickSound={onClickSound}
        onEnterSound={onEnterSound}
        onExitSound={onExitSound}
        onLongClickSound={onLongClickSound}
        onClick={this.state.hasFocus ? this._fadeOut : this._fadeIn}>
        <Image
          style={{
            height: height,
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          source={asset(source)}>
          <Animated.View
            // Use animation on opacity to fade in/out the tooltip
            // When opacity is 0, the tooltip is invisible, and
            // also not interactable.
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: this.state.opacityAnim,
                position: 'absolute',
              },
              showOnLeft ? {right: 80} : {left: 80},
            ]}>
            <TourTooltip tooltip={tooltip} visible={this.state.hasFocus} />
          </Animated.View>
        </Image>
      </VrButton>
    );
  }
}

module.exports = TourInfoButton;
