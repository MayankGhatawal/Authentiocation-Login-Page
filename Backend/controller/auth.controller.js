import { User } from '../Models/user.models.js'
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        if(!email || !name || !password){
            throw new Error('All Fields must be Required');
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            return res.status(400).json({success:false ,message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
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