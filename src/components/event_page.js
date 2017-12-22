import React, {Component} from 'react';
import AuthImg from '../data/happy.jpg';

class EventPage extends Component {
    render(){
        const imgStyle={"height":680};
        return(<div className="row">
            <div className="col-md-4 col-md-offset-1">
                <h2>We Are Alumni...</h2>
                <img alt="boss" style={imgStyle} src={AuthImg}/>
            </div>
        </div>);
    }
}
export default EventPage;