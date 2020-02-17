import React from 'react';
import propTypes from 'prop-types';
import './profileUser.css'


const ProfileUser = ({profile: {job, location, phone, tarif, description, user: {name, email, image}}}) => {

    return (
   <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={image} alt=""/>
                          
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    {name}
                                    </h5>
                                    <h6>
                                       {job}
                                    </h6>
                                    <p class="proile-rating">RANTINGS :
                                   <span>
                                    <i class="far fa-star"style={{color:"#f07306"}}></i>
                                    <i class="far fa-star" style={{color:"#f07306"}}></i>
                                    <i class="far fa-star" style={{color:"#f07306"}}></i>
                                    <i class="far fa-star" style={{color:"#f07306"}}></i>
                                    <i class="far fa-star"style={{color:"#f07306"}}></i>
                                    </span> 
                                    </p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">A Propos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Publication</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Contacter"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                            <div class="col-md-6">
                                                <label>Gouvernorat</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{location }</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nom</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{name }</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p> {email} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Telephone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p> {phone} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p> {job} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Tarif Par Jour</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p> {tarif} DNT</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                           
                                                <label>A Props moi:</label>
                                            
                                           
                                                <p> {description} </p>
                                            
                                        </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>           
        </div> 
    )
}

ProfileUser.propTypes = {

    profile: propTypes.object.isRequired
}

export default ProfileUser;



