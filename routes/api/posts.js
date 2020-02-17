const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route   POST api/posts
// @desc    create a post
// @access  Private
router.post('/', [auth, [
    check('text','Text is required').not().isEmpty()
]],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{

        const profile = await  User.findById(req.user.id).select('-password');
        const user = await User.findById(req.user.id).select('password');
      
        const newPost = new Post ({
        text: req.body.text,
        name: user.name,
        image: user.image,
        user: req.user.id
    })
    const post = await newPost.save();
    res.json(post);

    }catch (err) {

        console.error(err.message);
        res.status(500).send('Server Error');
        
    }

});
// @route   GET api/posts
// @desc    get all posts
// @access  Private
router.get('/',auth, async(req, res) => {
    try{
const posts = await Post.find().sort({date: -1});
res.json(posts);
    }catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }
});

//get post by id user
// router.get('/posts/user/:user_id',async(req,res)=>{
//     try{
//   const posts =await posts.find({user:req.params.user_id}).sort({date: -1});
//   if(!posts) 
//   return res.status(400).json({msg:'no posts for this user'});
//   res.json(posts);
//     }catch(err){
//   console.error(err.message);
//   if(err.kind=='ObjectId'){
//     return res.status(400).json({msg:'posts not find'});

//   }
//   res.status(500).send('server Error')

//     }
// });



// @route   GET api/posts/:id
// @desc    get post by id
// @access  Private
router.get('/:id',auth, async(req, res) => {
    try{
const post = await Post.findById(req.params.id);
if(!post){
    return res.status(404).json({msg: 'post not found'});

       }
res.json(post);
    }catch (err){
        console.error(err.message);
        if(!err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'post not found'});
        
               }
        res.status(500).send('Server Error');

    }
});

// @route   DELETE api/posts/:id
// @desc    delete a post
// @access  Private

router.delete('/:id',auth, async(req, res) => {
    try{
const post = await Post.findById(req.params.id);

if(!post){
    return res.status(404).json({msg: 'post not found'});

       }

// check user
if(post.user.toString() !== req.user.id){
    
return res.status(401).json({msg: 'user not authorized'})
       }

       await post.remove();

       res.json({msg: 'post removed'});

    }catch (err){
        console.error(err.message);
        if(!err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'post not found'});
        
               }
        res.status(500).send('Server Error');

    }
});
// @route   PUT api/posts/like/:id
// @desc    like a post
// @access  Private

router.put('/like/:id', auth, async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        //check if the post has already been liked
        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0){
            return res.status(400).json({ msg: 'post already liked'});
          }

          post.likes.unshift({ user: req.user.id});

          await post.save();
          res.json(post.likes);

    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
        
    }

});

// @route   PUT api/posts/unlike/:id
// @desc    unlike a post
// @access  Private

router.put('/unlike/:id', auth, async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        //check if the post has already been liked
        if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
            return res.status(400).json({ msg: 'post has not yet been liked'});
          }
         // get remove index
         const removeIndex = post.likes.map(like => like.user.toString().indexOf(req.user.id));

         post.likes.splice(removeIndex, 1);


          await post.save();

          res.json(post.likes);

    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
        
    }

});


// @route   POST api/posts/comment/:id
// @desc    comment on post
// @access  Private
router.post('/comment/:id', [auth, [
    check('text','Text is required').not().isEmpty()
]],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);

       const newComment= {
        text: req.body.text,
        name: user.name,
        image: user.image,
        user: req.user.id
    };
    post.comments.unshift(newComment);

     await post.save();

     res.json(post.comments);

    }catch (err) {

        console.error(err.message);
        res.status(500).send('Server Error');
        
    }

});

// @route   POST api/posts/comment/:id/comment_id
// @desc    delete comment 
// @access  Private
router.delete('/comment/:id/:comment_id', auth, async(req, res) => {
try{
    const post = await Post.findById(req.params.id);
    // pull out comment
    const comment = post.comments.find(comment => comment.id === req.params.comment_id);
    // make sure comment exists
    if(!comment){
        return res.status(404).json({ msg: 'comment does not exist'});
       }

   //check user
   if(comment.user.toString() !== req.user.id){
       return res.status(401).json({ msg: 'user not authorized'});

   }
    // get remove index
    const removeIndex = post.comments
    .map(comment => comment.user.toString()
    .indexOf(req.user.id));

    post.comments.splice(removeIndex, 1);


     await post.save();

     res.json(post.comments);


}catch (err){
    console.error(err.message);
    res.status(500).send('Server Error');
}
});

module.exports = router;
