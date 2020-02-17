import React, { useState } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment} from '../../actions/post';
import '../posts/posts.css'


const CommentForm = ({postId,  addComment }) => {
    const [formData, setFormData]=useState({
        text: '',
        
     
     });
     const{text}=formData;
     const onChange= e => setFormData({...formData,[e.target.name]:e.target.value});
    return (
        <div>
        <div >
          <h3 className="postTitle">Ajouter Commentaire </h3>
        </div>
        <form  onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
           
        }} className="post-form" >
          <textarea
            name="text"
            value={text}
            onChange={e=>onChange(e)}
            >

            </textarea>
         <div> <input type="submit"  value="Ajouter" className="btncmt" /></div>
        </form>
      </div>
    )
}

CommentForm.propTypes = {
    addComment: propTypes.func.isRequired,
}

export default connect(null, {  addComment }) (CommentForm)
