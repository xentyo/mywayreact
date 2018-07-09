import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/App.css'


class Footer extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };
    render() {
      const { body } = this.props;
        return(
           <div className="Footer
           ">
           {body}
           <p align="center">Footer - Copyright .... </p>
           </div>
        );
  }
}
export default Footer
;


