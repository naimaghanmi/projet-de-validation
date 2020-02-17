import React, { useEffect, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileUser from './profileUser';
import './profile.css';



const Profile = ({ getProfileById, 
profile: { profile, loading},
auth,
match,

}) => {
    useEffect(() =>{
        getProfileById(match.params.id);
    }, [getProfileById] )
    
    return (<Fragment>
        {profile === null || loading ? ( 
        <Spinner /> ) : (
        <Fragment>
            
            <Link to='/profiles'  style={{textDecoration:"none", color: "rgb(0, 47, 54)"}} >
                <div className="retour">
            <i class="fas fa-arrow-circle-left" style={{fill:"rgb(0, 47, 54)"}}></i><span>Retour</span></div>
                </Link>
            {auth.isAuthenticated && 
            auth.loading === false && 
            auth.user._id === profile.user._id && (
            <Link to='/edit-profile' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}}>
                <span  className="profileEdit">        
                 <i class="fas fa-user-circle text-primary" ></i> Modifier Profile
                 </span>
                </Link>
                 
                )}
            <div>
            <ProfileUser profile={profile}/>
           </div>
           
        </Fragment> 
        )}
        
        
    </Fragment>
    );
};

Profile.propTypes = {
    getProfileById: propTypes.func.isRequired,
    profile: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,

};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);

