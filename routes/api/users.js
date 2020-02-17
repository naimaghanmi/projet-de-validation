const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');

// @route   post api/users
// @desc    register user
// @access  Public
router.post('/',
    [
    check('name','Name is required').not().isEmpty(),
    check('email', 'please iclude a valid email').isEmail(),
    check('password', 'please enter a password with 6 or more characters').isLength({min : 6}),

    ],
   async (req, res) => {
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(400).json({ errors: errors.array()})

       }

const {name, email, password, image} = req.body;
  
  
 try{
//see if user exists
let user = await User.findOne({email});
if (user){
    res.status(400).json({ errors: [{msg: 'User already exists' }] });
}

user = new User({
    name,
    email,
    password,
    image
});
 //Encrypt password
 const salt = await bcrypt.genSalt(10);

user.password = await bcrypt.hash(password, salt);

await user.save();


 //return jsonwebtoken
const payload = {
    user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image
    }
}
jwt.sign(payload, config.get('jwtSecret'),
{expiresIn: 360000},
 (err, token) => {
   if(err) throw err;
   res.json({token});
 });

//

 } catch(err){
     console.error(err.message);
     res.status(500).send('server error')
 }

    
});

module.exports = router;
