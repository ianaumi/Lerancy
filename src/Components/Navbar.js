import { Component } from 'react';
import { MenuItems } from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './NavbarStyles.css';

class Navbar extends Component{
    state = { clicked: false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked});
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Lerancy</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} className='ham'/>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                          <li key = {index}>
                               <a className ={item.cName} href = {item.url}>{item.title}</a>
                          </li>
                        );
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        );  
    }
}

export default Navbar;