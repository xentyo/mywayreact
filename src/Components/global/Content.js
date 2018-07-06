import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/App.css'


class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };
    render() {
      const { body } = this.props;
        return(
           <div className="Content">
           {body}
           <p align="center">Footer - Copyright .... </p>
           </div>
        );
  }
}
export default Content;


