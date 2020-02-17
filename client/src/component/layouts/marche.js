import React from 'react'
import './marche.css'
export default function marche(){
    return (
        <div className="Home">
        
        <div className='Stage1'>
            <p><strong>Ne perdez plus votre temps à chercher des professionnels !</strong></p>
            <p>Rapido services vous s'offre tout les professionnels selon votre besoin avec facilité d'accés 
                et d'y contacter</p>
     <img  width="100%" height="350px" src="https://cdn.website-editor.net/ef4a63e3e07c47aa83c5418ca6cd13af/dms3rep/multi/mobile/teaserbox_51046901.jpg"></img>
     <h2>
        Comment ça marche ?    </h2>
                <div className="coll">
                        <img  className='imgleft' width="350px" src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                   <div className="etape">
                       <h4>01. chercher un professionnel</h4>
                         <p>  je cherche facilement un professionnel 
                         
                       </p>
                       
                   </div>
                </div>
        </div>
        <div className="coll">
        <div className="etape1">
                <h4>02.Selectionner le professionnel convenable</h4>
                <p>  selon mes besoins et suivants mes ressources 
                           (tarif et localisation ....) </p>
            </div>
            <img className='imgPicture' width="350px" src="https://i.pinimg.com/564x/23/4f/d0/234fd08d167cfdb3254d0f678140c71b.jpg"></img>
           
        </div>
        <div className="coll">
            <img  className='imgleft' width="350px" src="https://i.pinimg.com/564x/49/4d/3f/494d3faf080148e99e3c6b5552523495.jpg"></img>
            <div className="etape">
                <h4>03.Contacter  le professionnel séléctionné</h4>
                <p> soit par téléphone soit par émail 
                            </p>
            </div>
        </div>
        </div>
    )
}