import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import function_list from '../../functions/list';

const messages = [];
let lastKey;

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

  sendMessage = () => {
    messages.push({
      message: this.state.input,
      userId: this.props.store.user.id,
    });
    this.setState({
      ...this.state,
      input: '',
    });
  };

  handleKeyDown = (event) => {
    // if (lastKey !== 'Shift') {
    //   if (event.key === 'Enter') {
    //     this.sendMessage();
    //   }
    // }
    // lastKey = event.key;
  };
  render() {
    let Content = (
      <div className="chatBoxContainer">
        <div className="chatBox">
          {messages.map((message, index) => {
            return (
              <div className="messageItem">
                <div className="messageImageContainer">
                  <img className="messageImage" alt="img" />
                </div>
                <div className="messageTextContainer">
                  <textarea
                    readOnly
                    className="messageText"
                    style={{
                      height: function_list.chatMessageHeight(message.message),
                    }}
                    value={message.message}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="chatBoxCharaLeft">{`Characters left : ${
          256 - this.state.input.length
        }`}</p>
        <div className="chatMessengerBox">
          <textarea
            className="chatBoxInput"
            onInput={this.updateText}
            onClick={this.toggleView}
            value={this.state.input}
            maxLength={256}
            onKeyDown={this.handleKeyDown}
          ></textarea>

          <div className="chatBoxSend" onClick={this.sendMessage}>
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
              onKeyDown={this.handleKeyDown}
            ></textarea>
            <div className="chatBoxSendOpened" onClick={this.sendMessage}>
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
