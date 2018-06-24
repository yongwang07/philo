import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessageActions from '../action-creators/flashmessage';
import styles from '../styles/flashMessage';

class FlashMessage extends Component {
  componentWillMount() {
    setInterval(() => {
        if (!!this.props.flashMessage.message) {
            this.props.sendFlashMessage();
        }
    }, 3000);
  }

  render() {
    const { message } = this.props.flashMessage;
    if (!message) {
      return null;
    }
    return (
      <div className={styles.row}>
        <div className={styles.alert} role="alert">
          {message}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>  ({ flashMessage: state.flashmessage });
const mapStateToDispatch = (dispatch) => bindActionCreators(flashMessageActions, dispatch);
export default connect(mapStateToProps, mapStateToDispatch)(FlashMessage);