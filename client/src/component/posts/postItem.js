import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import './posts.css'

const PostItem = ({ 
  addLike, 
  removeLike,
  deletePost,
  auth, 
  post: { _id, text, name, image, user, likes, comments, date },
  reactionPost
}) => {

    return (
       <div className="postItem">
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
            <p className="textPost">
             {text}
            </p>
             

            {reactionPost && <Fragment>
             
              <div >
              <i class="fas fa-thumbs-up" style={{color:"#007dbc", fontSize:"30px"}}
              onClick={e => addLike(_id)}></i>
             
              <span>  {likes.length > 0 && <span > {likes.length} </span>}
              <i class="fas fa-thumbs-down" style={{color:"#007dbc", fontSize:"30px"}}
              onClick={e => removeLike(_id)}></i>
              </span>
               
           
              </div>
             
            
               
         
            <Link to={`/posts/${_id}`} ><button className='comment-count'>
            Commentaire {' '}
              {comments.length > 0 && (
              <span > {comments.length} </span>
            
              

              )}
              </button>
            </Link>
            {!auth.loading && user === auth.user._id && (

            <div className="deletePost">
              
             <i class="far fa-times-circle" style={{color:"#e60000", fontSize:"30px"}}
             onClick={e => deletePost(_id)}></i>
            </div>

            )}
           
              </Fragment>}
            
          </div>
        </div>
    )
}

PostItem.defaultProps = {
  reactionPost: true
}

PostItem.propTypes = {
    post: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    addLike: propTypes.func.isRequired,
    removeLike: propTypes.func.isRequired,
    deletePost: propTypes.func.isRequired,

}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost } )(PostItem);
