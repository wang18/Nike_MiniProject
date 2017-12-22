import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TextFieldGroup from './common/textFieldGroup';
import {Field, reduxForm} from 'redux-form';

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
        }
    }

    checkUserExists(e){
        const val=e.target.value;
        if(val !==''){
            this.props.isUserExists(val)
                .then((res) => {
                const ind = _.findIndex(res.data,{'title': val});
                if(ind>=0){
                    this.setState({
                        invalid: true
                    });
                    alert(`${res.data[ind].title} exists...`);
                }else{
                    this.setState({
                        invalid: false
                    });
                }
            });
        }
    }

    onSubmit(values){
        this.setState({
            isLoading: true
        });
        this.props.userSignupRequest(values)
            .then(() => this.setState({isLoading: false}))
            .then(() => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'you signed up successfully. Welcome!'
                });
                this.props.history.push('/')});
    }

    render(){

        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h1>Join our community!</h1>

                <Field label="Username" name="title" component={TextFieldGroup} checkUserExists={this.checkUserExists.bind(this)}/>
                <Field label="password" name="password" component={TextFieldGroup} checkUserExists={this.checkUserExists.bind(this)}/>


                <div className="form-group">
                    <button disabled={this.state.isLoading } className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>

            </form>
        )
    }
}
SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
}
function validate(values){
    const errors={};
    if(!values.title){
        errors.title="Enter username...";
    }
    if(!values.psw){
        errors.psw="Enter password...";
    }

    return errors;
}

export default reduxForm({validate, form: 'postsNewForm'})(SignupForm);