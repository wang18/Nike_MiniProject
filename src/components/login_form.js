import React, {Component} from 'react';
import TextFieldGroup from './common/textFieldGroup';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {addFlashMessage} from "../actions/flash_messages";

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false
        }
    }
    onSubmit(values){
        this.setState({
            isLoading: true
        });
        this.props.login(values).then(()=> {
            if(this.props.isAuthenticated){
                console.log("right...");

                this.props.addFlashMessage({
                    type: 'success',
                    text: 'you login successfully. Welcome!'
                });
            }else{
                console.log("wrong...");
                this.props.addFlashMessage({
                    type: 'error',
                    text:'Wrong password...'
                });
            }
            this.props.history.push('/');
            }
        );
        this.setState({isLoading: false});
    }
    render(){
        const {handleSubmit,error} =this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h1>Login</h1>
                <Field label='Username' name='title' component={TextFieldGroup}/>
                <Field label='password' name='password' component={TextFieldGroup}/>
                {error && <strong>{error}</strong>}
                <div className='form-group'>
                    <button className='btn btn-primary btn-lg' disabled={this.state.isLoading}>Login</button>
                </div>
            </form>);
    }
}

function validate(values){
    const errors ={};
    if(!values.title){
        errors.title="Enter username...";
    }
    if(!values.password){
        errors.password="Enter password...";
    }
    return errors;
}

const mapDispatchToProps=(dispatch) =>{
    return bindActionCreators({login, addFlashMessage}, dispatch);
}

const mapStateToProps=(state)=>{
    return {isAuthenticated: state.auth.isAuthenticated};
}

LoginForm.propsTypes={
    login: PropTypes.func.isRequired
}
export default reduxForm({validate, form: 'loginForm'})(connect(mapStateToProps,mapDispatchToProps)(LoginForm));