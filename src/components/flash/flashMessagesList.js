import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './flashMessage';
import {bindActionCreators} from 'redux';
import {deleteFlashMessage} from '../../actions/flash_messages';

class FlashMessagesList extends Component{
    render(){
        const messages = this.props.messages.map(message => {
                return <FlashMessage
                    key={message.id}
                    message={message}
                    deleteFlashMessage={this.props.deleteFlashMessage}/>
        });

        return (<div>{messages}</div>);
    }
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {messages: state.flashMessages}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteFlashMessage},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FlashMessagesList);