import React, {Fragment, useState } from 'react';
import { Link, withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {createProfile} from '../../actions/profile';
import {metier, gouvernorat } from '../const/data';
import '../auth/Register.css'



const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        
        job:'',
        location:'',
        phone: null,
        tarif:'',
        description:''
  });

const {
    job,
    location,
    phone,
    tarif,
    description
}  = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

const onSubmit = e => {
e.preventDefault();
createProfile(formData, history)
}

    return (
       <Fragment>
           <div className="register">
           <h1 className="my-1">Creer Votre Profile </h1>
           <p>Remplir les champs ci dessous</p>
 <form onSubmit={e => onSubmit(e)} className="form">

 <select name="job" value={job} onChange={e => onChange(e)}>
  <option value="">selectionner votre profession</option>
  {metier.map((el, index) => {
    return <option key={index} >{el}</option>;
  })}
</select>

<select name="location" value={location} onChange={e => onChange(e)}>
  <option value="">selectionner votre gouvernorat</option>
  {gouvernorat.map((loc, index) => {
    return <option key={index} >{loc}</option>;
  })}
</select>
    


  



                       <input value={phone} onChange={e => onChange(e)} 
                        name="phone"
                        type="text"
                        placeholder="Phone..."
                        
                    />
                    <input value={tarif} onChange={e => onChange(e)}
                        name="tarif"
                        type="text"
                        placeholder="tarif..."
                    

                    />
                     <input value={description} onChange={e => onChange(e)}
                        name="description"
                        type="text"
                        placeholder="description..."
                    

                    />

                   
                    <input
                        type="submit"
                        value="Envoyer"
                        className="btn"
                    />
                    <p>
                    <Link to='/dashboard'><i class="fas fa-arrow-circle-left" style={{fill:"rgb(0, 47, 54)"}}></i>
                    <span>Retour</span></Link>
                    </p>
                    

                  
            </form>
           </div>
            </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: propTypes.func.isRequired

};


export default connect(null, { createProfile })(withRouter(CreateProfile));
