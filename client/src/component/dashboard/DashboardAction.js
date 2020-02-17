import React from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css'

 const DashboardAction = () => {
    return (
        <div className="actiondash">
        <Link  to='/edit-profile'>
            <button className="btnEdit">        <i class="fas fa-user-circle text-primary"></i> Modifier Profile
         </button>
        </Link>
        </div>
       
    
    )
}

export default  DashboardAction;