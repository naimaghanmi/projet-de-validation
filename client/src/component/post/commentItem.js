import React, {Fragment} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';


const CommentItem = ({ postId,
comment: { _id, text, name, image, user, date},
auth,
deleteComment }) => (
     <div className="postItem" >
          <div>
            <Link to={`/profile/${user}`}>
              <img
               
                src={image}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p >
              {text}
            </p>
             <p >
    {/* posted on <Moment format='YYYY/MM/DD'> {date} </Moment> */}
            </p>

              

{!auth.loading && user === auth.user._id && (

<button  onClick={e => deleteComment(postId, _id)}
type="button">
    <i class="far fa-times-circle" style={{color:"#e60000", fontSize:"30px"}}></i>
 </button>

)}
            </div>
          </div>
    );
CommentItem.propTypes = {
postId: propTypes.number.isRequired,
comment: propTypes.object.isRequired,
auth: propTypes.object.isRequired,
deleteComment: propTypes.func.isRequired,
}
const mapStateToProps = state => ({
auth: state.auth
})

export default connect (mapStateToProps,{ deleteComment }) (CommentItem)
