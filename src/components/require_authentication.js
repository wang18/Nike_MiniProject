import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addFlashMessage} from '../actions/flash_messages';
import {bindActionCreators} from 'redux';

export default function (ComposedComponent) {

    class Authenticate extends Component{

     componentWillMount(){
        if(!this.props.isAuthenticated){
            this.props.addFlashMessage({
                type: 'error',
                text:'You need to login to see this page...'
            });
            this.props.history.push('/');
        }
    }

    componentWillUpdate(nextProps){
         if(!nextProps.isAuthenticated){
             this.props.addFlashMessage({
                type: 'error',
                text:'You need to login to see this page...'
             });
         }
         this.props.history.push('/');
    }

    render(){
            return(<ComposedComponent {...this.props}/>)
        }
    }

    Authenticate.propTypes = {
        isAuthenticated:PropTypes.bool.isRequired
    };

    const mapStateToProps=(state)=>{
        return {isAuthenticated: state.auth.isAuthenticated};
    }

    const mapDispatchToProps=(dispatch)=>{
        return bindActionCreators({addFlashMessage},dispatch);
    }

    return connect(mapStateToProps,mapDispatchToProps)(Authenticate);
}