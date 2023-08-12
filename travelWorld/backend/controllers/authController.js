import User from '../models/User.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
export const register = async(req, res)=>{
    try {

        // hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });

        await newUser.save();
        res.status(200).json({success:true, message:"Succeess"});
    } catch (err) {
        res.status(500).json({success:false, message:err});
    }
};

export const login = async(req, res)=>{
    const email = req.body.email;
    try {
        const user = await User.findOne({email});

        // if user doesn't exist
        if(!user){
            return res.status(404).json({success:false, message:"User Not Found"});
        }

        // if user exist then check whether the password is correct or not
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        // if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message:"Incorrect Email"});
        }

        const {password, role, ...rest} = user._doc;

        // create jwt token
        const token = jwt.sign(
            { id:user._id, role:user.role },
            "gahg48589a45ajfjAUFAHHFIhufuu",
            { expiresIn: "15d" }
        );

        // set token in the browser cookies and send the response to the client
        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({token, data:{ ...rest }});

    } catch (err) {
        res.status(500).json({ success: false, message: err});
    }
}