import React, {Fragment, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import Spinner from '../layouts/Spinner';
import { getProfiles} from '../../actions/profile';
import { connect } from 'react-redux';
import {metier, gouvernorat} from '../const/data';
import './profiles.css';

const Profiles = ({ getProfiles,  profile: { profiles, loading} }) => {
  const [formData, setFormData]=useState({
    jobSearch: '',
    locationSearch: '',

});
const{jobSearch, locationSearch}=formData;
const onChange= e => setFormData({...formData,[e.target.name]:e.target.value});



  useEffect(() => {
    getProfiles();
   
  }, [getProfiles]);

    
    return <Fragment>
      { loading ? <Spinner /> : <Fragment > 

        <div className="profilesSection">
          <h1> Chercher et Contacter des Agents </h1>
          <div className="recherche">

     <div> <span><i class="fas fa-search"></i>Chercher Par Metier </span>  {'   '}
       <select name="jobSearch"  value={jobSearch} onChange={e=>onChange(e)}>
  <option value="">Choisir Metier</option>
  {metier.map((el, index) => {
    return <option key={index} >{el}</option>;
  })}
</select></div>

<div><span><i class="fas fa-search"></i>Chercher Par Gouvernorat</span> {'   '}
<select name="locationSearch" value={locationSearch} onChange={e=>onChange(e)}>
  <option value="">Choisir Gouvernorat</option>
  {gouvernorat.map((loc, index) => {
    return <option key={index} >{loc}</option>;
  })}
</select></div>
        </div>
        
      
        <div className="listUsers">
         
          {profiles.length > 0 ? (
            profiles
            .filter(
              e =>
                e.job
                  .toLowerCase()
                  .includes(jobSearch.toLowerCase()) &&
                  e.location
                  .toLowerCase()
                  .includes(locationSearch.toLowerCase()) 
            )
            
           .map(profile => (
              <div>
              <Card  key={profile._id} profile={profile} /> </div>
            ))

          ) : <h4>No profiles found</h4>}
          </div>
          </div>
      </Fragment> }
    </Fragment>
    
};

Profiles.propTypes = {
    getProfiles: propTypes.func.isRequired,
     profile: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});


export default connect(mapStateToProps, { getProfiles})(Profiles);
