import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './card.scss';

const Card = ({ profile: {
    user: {_id, name, image},
    job,
    location,
    
}
}) => {
    return (
        


<div class="cards cards--three">
<img src={image} class="img-responsive" alt="" />
<span class="cards--three__rect-1"><span >here</span>
  <span class="shadow-1"></span>
  <p>
    <h5>{name}</h5>
<h5>{job}</h5>
<h5>{location}</h5></p>
</span>
<span class="cards--three__rect-2">
  <span class="shadow-2"></span>
</span>
<span class="cards--three__circle"></span>
<ul class="cards--three__list">
<li><Link to={`/profile/${_id}`} style={{color:"#fff"}} >
    Voir Profile
            </Link></li>
</ul>
</div>
       


    )
}

Card.propTypes = {
    
    profile: propTypes.object.isRequired

}

export default Card;
