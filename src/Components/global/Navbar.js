import React, { Component } from 'react';
import './css/App.css'

class Navbar extends Component {
        render() {
            return(
               <div className="Navbar">
               <nav class="nav nav-pills nav-justified">
                 <a class="nav-item nav-link disable" href="">Active</a>
                 <a class="nav-item nav-link" href="">Link</a>
                 <a class="nav-item nav-link" href="">Link</a>
                 <a class="nav-item nav-link active" href="">Disabled</a>
               </nav>
               </div>
            );
      }
    }
export default Navbar;

