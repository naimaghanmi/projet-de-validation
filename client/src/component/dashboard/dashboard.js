import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import DashboardAction from './DashboardAction';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import './dashboard.css'



const Dashboard = ({ getCurrentProfile, deleteAccount,  auth: { user } , 
    profile: {profile, loading}}) => {

    useEffect(() => {
    getCurrentProfile();
    }, [getCurrentProfile]);



    return loading && profile === null ? <Spinner/> : <Fragment> 
   


	<div className="dashRoot">
    <h1>Bienvenue <span>{ user && user.name}</span> </h1>
      <div className="dashboard">
        <div  >
		    <img src={user && user.image} alt="img" />
        </div>
        
        <div className="info">
          <label>Nom</label> <p>{ user && user.name}</p>
           <label>Email</label><p>{user && user.email}</p>
          
        </div>
        </div>
        </div>
        
       


         {profile !== null ? (
         <Fragment>
             <DashboardAction />
             <div className="actiondash">
                 <button onClick={() => deleteAccount()} className="btnDelete" style={{width:"200px"}}>
                     Supprimer mon Compte
                 </button>
             </div>
         </Fragment>
         ) : (
         <Fragment>
             <div className="actiondash">
         <p>
         Vous n'avez pas encore configuré un profil, ajouter quelque informations pour rejoindre notre réseau de depanneurs</p>
         <Link to="/create-profile" >
            <button className="btnEdit">Créer Profil</button> 
         </Link>
         </div>
         </Fragment>
         ) }
         
    </Fragment>;
};

Dashboard.propTypes = {
    getCurrentProfile: propTypes.func.isRequired,
    deleteAccount: propTypes.func.isRequired,
    auth: propTypes.object.isRequired,
    profile: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
