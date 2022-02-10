import React from 'react';
import PersonIcon from "@material-ui/icons/Person"
import ForumIcon from "@material-ui/icons/Forum"
//import IconButton from "@material-ui/core/IconButton"

function Header() {
  return (
    <div>
        
        <PersonIcon classnName='header__icon' fontSize="large" />
    
        
        <img 
            className='header__logo'
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
            alt="tinder logo" 
        /> 
        
        
        <ForumIcon className='header__icon' fontSize="large" />
        
  
    </div>

  )
}

export default Header;
