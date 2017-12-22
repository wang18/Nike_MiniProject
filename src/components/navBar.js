import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {logout} from '../actions/login'

class NavBar extends Component{
    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
        const {isAuthenticated} = this.props.auth;
        const userLink=(
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="#" onClick={this.logout.bind(this)}>Logout Up</a>
                </li>
            </ul>
        );
        const guestLink=(
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>);
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className='navbar-brand' to="/event">Login to See Page</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        {isAuthenticated ? userLink : guestLink}
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) =>{
    return {auth: state.auth};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
