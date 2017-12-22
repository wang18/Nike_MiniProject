import React, {Component} from 'react';
import SignupForm from './signupForm';
import PropTypes from 'prop-types';
import {connect}from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignupRequest, isUserExists} from '../actions/signup_actions';
import {addFlashMessage} from '../actions/flash_messages';

class SignupPage extends Component{
    render(){
        const {userSignupRequest, addFlashMessage, history, users, isUserExists} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <SignupForm userSignupRequest={userSignupRequest}
                                    history={history}
                                    addFlashMessage={addFlashMessage}
                                    isUserExists={isUserExists}
                                    users={users}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

SignupPage.propTypes={
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
}

const mapStateToProps =(state) =>{
    return {
        users: state.users
    };
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({userSignupRequest, addFlashMessage, isUserExists}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);