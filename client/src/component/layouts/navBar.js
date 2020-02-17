import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../../actions/auth';
import './logo.css'
import './navbar.css'
 const navBar = ({ auth: {isAuthenticated, loading}, logout}) => {
     const authLinks = (
      
<ul className="left">
<div className='haut'>
<li><Link to='/' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}} >
<div className="logologo">
<div className="logo">
<i class="fab fa-stripe-s"></i>
<i class="fas fa-phone-alt"></i>
<i class="fab fa-dyalog"></i>
</div>
<span className="depannage">Dépannage</span>
</div></Link></li>

<li><Link to='/profiles' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>
            Nos Agents</Link></li>

            <li><Link to='/posts' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>
            Publication</Link></li>

        <li><Link to='/dashboard' style={{textDecoration:"none",color: "rgb(0, 47, 54)"}}>
            dashboard</Link></li>

</div>

<div className='right'>
<li><Link onClick={logout}to='/' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}} >
            <button className="btnNavBar">Deconnexion</button></Link></li>
</div>
</ul>

     );

     const guestLinks = (
        <ul className="left">
                   <div className='haut'>
                   <li><Link to='/' style={{textDecoration:"none",color: "rgb(0, 47, 54)"}} >
        <div className="logologo">
            <div className="logo">
            <i class="fab fa-stripe-s"></i>
            <i class="fas fa-phone-alt"></i>
            <i class="fab fa-dyalog"></i>
            </div>
            <span className="depannageLogo">Dépannage</span>
        </div></Link></li>
                   <li><Link to='/quinous' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>Qui somme nous?</Link ></li>
                    <li >
                  <Link  to='/marche' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>Comment ça marche?</Link >
                  </li>

                   </div>
                   
       <div className='right'>
       <button className="inscription"><Link to='/register' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>Inscription </Link></button>
        <button className="btnNavBar"><Link to="/login" style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>Connexion</Link></button>
        </div>
    </ul>
     );

    return (
        <div className="main-header">
  
        
    { !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks} </Fragment>)}

   
     </div>
  
    )
};

navBar.propTypes = {
    logout: propTypes.func.isRequired,
    auth: propTypes.object.isRequired
};

const mapStateToProps = state=> ({
auth: state.auth
});


export default connect(mapStateToProps, {logout}) (navBar);

