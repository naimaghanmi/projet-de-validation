import React from 'react';
import {Link} from 'react-router-dom';
import videoHome from '../folder/videoHome.mp4';
import './main.css';
import {image} from '../const/data'



const Main = () => {

    
    return (
        <div className="mainSection"> 
         

         <video id="background-video" src={videoHome}  width="100%"  autoPlay muted loop />
         <div className="content">

         <p >Nouveau services de dépannage a domicile en Tunisie 24h de serveillace et 7 jours de disponibilité</p>

         <button className="btnMAin">
           
          <Link to='/profiles' style={{textDecoration:"none", color: "rgb(0, 47, 54)"}} > 
          
            Agents</Link> </button>
            </div>
        
            <div className="depannage">
            <h3>Dépannage à Domicile</h3> 
             <p>Prmier Dpannage  D'URGENCE EN TUNISIE
Dépannage d'urgence pour toutes vos pannes électriques,pannes de chauffage et sanitaires en tunisie.   Aussi Notre service est a votre disposition <b>7/7j </b> et <b>24/24h</b> ,n'heziter à y accéder</p>
       
       </div>

       <div className="Services">
       {image.map(el =>
       <div>
         <div  className="containerMain">
        <img  src={el.src}/>
        <div className="title"> <p>{el.title}</p> </div>
        </div>
      </div>
       )};
  </div>
    
        </div>
    )
}




export default Main;
