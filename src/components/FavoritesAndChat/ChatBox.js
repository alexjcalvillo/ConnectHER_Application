import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import function_list from '../../functions/list';

const messages = [
  { message: 'Hello Chase how are you doing?', userId: 1 },
  { message: 'Just reaching out again i never heard from you', userId: 1 },
  { message: 'Are you getting my messages?', userId: 1 },
];
let lastKey;

class ChatBox extends Component {
  state = {
    input: '',
    view: 'closed',
  };

  componentDidMount() {
    this.chatScrollToBottom();
  }

  componentDidUpdate() {
    this.chatScrollToBottom();
  }

  chatScrollToBottom = () => {
    let chatBox = document.getElementById('chatBox');

    if (chatBox !== null) {
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 250);
    } else {
      chatBox = document.getElementById('chatBoxOpened');
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 250);
    }
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

  handleDoubleClick = (input) => {
    if (input === 'Click') {
      if (lastKey === 'Click') {
        this.toggleView();
      } else {
        lastKey = 'Click';
      }
    }
    this.doubleClickTimer();
  };

  doubleClickTimer = () => {
    setTimeout(() => {
      lastKey = '';
    }, 300);
  };

  isMessageMine = (id) => {
    if (id == this.props.store.user.id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let Content = (
      <div className="chatBoxContainer">
        <div className="chatBox" id="chatBox">
          {messages.map((message, index) => {
            let leftImage = '0%';
            let rightImage = '100%';
            let imageSrc = '';
            if (message.userId !== this.props.store.user.id) {
              leftImage = '100%';
              rightImage = '0%';
            }
            for (
              let i = 0;
              i < this.props.store.memberListingsReducer.length;
              i++
            ) {
              if (
                message.userId ===
                this.props.store.memberListingsReducer[i].user_id
              ) {
                imageSrc = this.props.store.memberListingsReducer[i].headshot;
              }
            }

            return (
              <div className="messageItem">
                <div
                  className="messageImageContainerMarginFix"
                  style={{ opacity: leftImage }}
                >
                  <div
                    className="messageImageContainer"
                    style={{
                      marginTop: function_list.chatMessageHeight(
                        message.message
                      ),
                    }}
                  >
                    <img className="messageImage" src={imageSrc} alt="img" />
                  </div>
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
                <div
                  className="messageImageContainerMarginFix"
                  style={{ marginLeft: '2px', opacity: rightImage }}
                >
                  <div
                    className="messageImageContainer"
                    style={{
                      marginTop: function_list.chatMessageHeight(
                        message.message
                      ),
                    }}
                  >
                    <img className="messageImage" alt="img" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="chatMessengerBox">
          <textarea
            className="chatBoxInput"
            onInput={this.updateText}
            onClick={() => {
              this.handleDoubleClick('Click');
            }}
            value={this.state.input}
            maxLength={256}
            onKeyDown={this.handleKeyDown}
          ></textarea>

          <div className="chatBoxSend" onClick={this.sendMessage}>
            <p className="chatBoxSendText">Send</p>
          </div>
        </div>
        <p className="chatBoxCharaLeft">{`Characters left : ${
          256 - this.state.input.length
        }`}</p>
      </div>
    );

    if (this.state.view === 'opened') {
      Content = (
        <div className="chatBoxContainerOpened">
          <div className="chatBoxOpened" id="chatBoxOpened">
            {messages.map((message, index) => {
              let leftImage = '0%';
              let rightImage = '100%';
              if (message.userId !== this.props.store.user.id) {
                leftImage = '100%';
                rightImage = '0%';
              }
              return (
                <div className="messageItem">
                  <div
                    className="messageImageContainerMarginFix"
                    style={{ opacity: leftImage }}
                  >
                    <div
                      className="messageImageContainer"
                      style={{
                        marginTop: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                    >
                      <img className="messageImage" alt="img" />
                    </div>
                  </div>
                  <div className="messageTextContainer">
                    <textarea
                      readOnly
                      className="messageText"
                      style={{
                        height: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                      value={message.message}
                    />
                  </div>
                  <div
                    className="messageImageContainerMarginFix"
                    style={{ marginLeft: '2px', opacity: rightImage }}
                  >
                    <div
                      className="messageImageContainer"
                      style={{
                        marginTop: function_list.chatMessageHeight(
                          message.message
                        ),
                      }}
                    >
                      <img className="messageImage" alt="img" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chatMessengerBoxOpened">
            <textarea
              className="chatBoxInputOpened"
              onInput={this.updateText}
              onClick={() => {
                this.handleDoubleClick('Click');
              }}
              value={this.state.input}
              maxLength={256}
              onKeyDown={this.handleKeyDown}
            ></textarea>
            <div className="chatBoxSendOpened" onClick={this.sendMessage}>
              <p className="chatBoxSendText">Send</p>
            </div>
          </div>
          <p className="chatBoxCharaLeftOpened">{`Characters left : ${
            256 - this.state.input.length
          }`}</p>
        </div>
      );
    }
    return <> {Content} </>;
  }
}

export default connect(mapStoreToProps)(ChatBox);
