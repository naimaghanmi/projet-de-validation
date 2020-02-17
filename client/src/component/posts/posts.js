import React, { Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import PostItem from './postItem';
import PostForm from './postForm';
import './posts.css'

import { getPosts } from '../../actions/post';


const Posts = ({ getPosts, post:{ posts, loading }}) => {
    useEffect(() => {
        getPosts();
     }, [getPosts])

    return  loading ?  <Spinner /> :   <Fragment> 
           <div className="postRoot"> 
           <h1 className="postTitle"> Publication </h1> 
           <p>Bienvenu dans la Communauté</p>


           <div>
            <PostForm />
           </div>
           

            <div>
    {posts.map(post => <PostItem key={post._id} post={post} />)}
            </div>
            </div>

        </Fragment> 
        
    
   
};

Posts.propTypes = {
getPosts: propTypes.func.isRequired,
post: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post

});

export default connect(mapStateToProps, { getPosts })(Posts);
