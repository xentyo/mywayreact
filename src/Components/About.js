import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Components
import Footer from './global/Footer';
import Navbar from './global/Navbar';


class About extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
      };
    render() {
        const { children } = this.props;
        return (
            <div className="About">
            <Navbar/>
            <Footer body={children}/>
            
            </div>
        );
    }
}

export default About;