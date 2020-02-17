const express = require('express');
const router = express.Router();
const auth=require('../../middleware/auth');
const {check,validationResult}=require('express-validator');
const Profile=require('../../models/Profile');
const User=require('../../models/User');
const Post = require('../../models/post');


// @desc    GET current users profile
// @access  Public
// @route   GET api/profile/me
router.get('/me',auth,async (req, res) => {
    try{
  const profile=await Profile.findOne({user: req.user.id}).populate('user',['name','image']);
    if(!profile){
        return res.status(400).json({msg:'there is no profile for this user'});
    }
   res.json(profile);
    }catch(err){
        console.log(err.message);
        res.status(500).send('server Error')
    }
});
//create profile
router.post('/',
[auth,[
  check('job', 'job is required').not().isEmpty(),
  check('location', 'location is required').not().isEmpty(),
  check('phone', 'phone is required').isLength({min : 8})
]],
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const{job,location,phone,tarif,description}=req.body;
    //build profile project
     const profileFields={};
     profileFields.user=req.user.id;
     if(job) profileFields.job=job;
     if(location) profileFields.location=location;
     if(phone) profileFields.phone=phone;
     if(tarif) profileFields.tarif=tarif;
     if(description) profileFields.description=description;

   try{

    let profile= await Profile.findOne({user:req.user.id});
    if(profile){
        //update
        profile=await Profile.findOneAndUpdate(
            {user:req.user.id},
            {$set:profileFields},
            {new:true}
            );
            return res.json(profile);
    }
    //create 
    profile=new Profile(profileFields);
    await profile.save();
    res.json(profile);
   }catch(err){
    console.log(err.message);
    res.status(500).send('server Error')
}
});
//get  all profiles
router.get('/',async(req,res)=>{
    try{
  const profiles =await Profile.find().populate('user',['name','image']);
  res.json(profiles);
    }catch(err){
  console.error(err.message);
  res.status(500).send('server Error')

    }
});
//get profile by id
router.get('/user/:user_id',async(req,res)=>{
    try{
  const profile =await Profile.findOne({user:req.params.user_id}).populate('user',['name','image']);
  if(!profile) 
  return res.status(400).json({msg:'no profile for this user'});
  res.json(profile);
    }catch(err){
  console.error(err.message);
  if(err.kind=='ObjectId'){
    return res.status(400).json({msg:'profile not find'});

  }
  res.status(500).send('server Error')

    }
});





//delete profile
router.delete('/',auth,async(req,res)=>{
    try{
   // remove user posts
   await Post.deleteMany({ user: req.user.id })
  //remove profile
  await Profile.findOneAndRemove({user:req.user.id});
  //remove user
  await User.findOneAndRemove({_id:req.user.id});

  res.json({msg:'User deleted'});
    }catch(err){
  console.error(err.message);
  res.status(500).send('server Error')

    }
});
module.exports = router;