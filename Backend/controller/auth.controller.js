import { User } from '../Models/user.models.js'
import bcrypt from 'bcrypt';
import { generateVerificationCode } from '../utils/generateVerificationCode.js'

export const signup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        if(!email || !name || !password){
            throw new Error('All Fields must be Required');
        }

        const userAlreadyExists = await User.findOne({email})
        console.log("user already exists", userAlreadyExists);
        
        if(userAlreadyExists) {
            return res.status(400).json({success:false ,message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = generateVerificationCode();
        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 HOURS,

        })
        await user.save();
        // jwt
        generateTokenAndSetCookie(res, user._id);

        res.status(201).json({
            success: true,
            message: "User register Successful",
            user: {
                ...user._doc,
                password: undefined,
            }
        })
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const login = async (req, res) => {
    res.send("Login Routes");
}

export const logout = async (req, res) => {
    res.send("Logout Routes");
}