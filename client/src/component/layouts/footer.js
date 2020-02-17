import React  from "react";
import './footer.css'
import './logo.css'
export default function footer() {
    return(
        <div className="final">
        <div className="footer">
            <div className="section1">
                <div className="logologo">
<div className="logo" >
<i class="fab fa-stripe-s"></i>
<i class="fas fa-phone-alt"></i>
<i class="fab fa-dyalog"></i>
</div>
<span className="depannage">Dépannage</span>
</div>
                <h3>Renseignement</h3>
                <p>Dépannage d’urgence à domicile pour toutes vos pannes électriques, 
                    pannes de chauffage et sanitaires en tunisie. Construction Bâtiment, 
                    Plomberie, Electricité, chauffage, 
                    Climatisation</p>
            </div>
            <hr></hr>
            <div className="section2">
            <h5 >Nous Joindre</h5>

                <ul>
                <li>
            <a href="#!" style={{textDecoration:"none",color:"#002F36"}}>adress:tunis</a>
          </li>
          <li>
            <a href="#!" style={{textDecoration:"none",color:"#002F36"}}>Email:sercive@contact.tn</a>
          </li>
          <li>
            <a href="#!"style={{textDecoration:"none",color:"#002F36"}}>tel:71000071</a>
          </li>
                </ul>


            </div>

        </div>
        <div className="end"><p>© 2020 Copyright</p>
        </div>
        </div>
    )
    
}
