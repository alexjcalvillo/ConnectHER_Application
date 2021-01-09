import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ChatBox extends Component {
  state = {
    input: '',
    view: 'closed',
  };

  toggleView = () => {
    let view;
    if (this.state.view === 'closed') view = 'opened';
    if (this.state.view === 'opened') view = 'closed';

    this.setState({
      ...this.state,
      view,
    });
  };

  updateText = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value,
    });
  };

  render() {
    let Content = (
      <div className="chatBoxContainer">
        <div className="chatBox"></div>
        <p className="chatBoxCharaLeft">{`Characters left : ${
          256 - this.state.input.length
        }`}</p>
        <div className="chatMessengerBox">
          <textarea
            className="chatBoxInput"
            onInput={this.updateText}
            onClick={this.toggleView}
            maxLength={256}
          ></textarea>

          <div className="chatBoxSend">
            <p className="chatBoxSendText">Send</p>
          </div>
        </div>
      </div>
    );

    if (this.state.view === 'opened') {
      Content = (
        <div className="chatBoxContainerOpened">
          <div className="chatBoxOpened"></div>
          <p className="chatBoxCharaLeft">{`Characters left : ${
            256 - this.state.input.length
          }`}</p>
          <div className="chatMessengerBoxOpened">
            <textarea
              className="chatBoxInputOpened"
              onInput={this.updateText}
              onClick={this.toggleView}
              value={this.state.input}
              maxLength={256}
            ></textarea>
            <div className="chatBoxSendOpened">
              <p className="chatBoxSendText">Send</p>
            </div>
          </div>
        </div>
      );
    }
    return <> {Content} </>;
  }
}

export default connect(mapStoreToProps)(ChatBox);
