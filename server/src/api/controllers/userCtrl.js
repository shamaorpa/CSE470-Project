import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import Token from '../models/tokenModel.js';
import jwt from 'jsonwebtoken';
import properties from '../../config/properties.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid password'
            });
        }
        const token = jwt.sign({ _id: user._id }, properties.JWT_SECRET);
        const refreshToken = jwt.sign({ _id: user._id }, properties.JWT_SECRET, { expiresIn: '7d' });
        const refreshTokenObj = new Token({
            userId: user._id,
            token: refreshToken
        });
        await refreshTokenObj.save();
        res.status(200).json({
            message: 'Login Successful',
            token,
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

export const signup = async (req, res) => {
    try {
        const { email, password, name, university, major, year, university_id } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const hash = await bcryptjs.hash(password, 10);
        const newUser = new User({
            email,
            password: hash,
            name,
            university,
            major,
            year,
            university_id
        });
        await newUser.save();
        const token = jwt.sign({ _id: newUser._id }, properties.JWT_SECRET);
        res.status(200).json({
            message: 'Signup Successful',
            token,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

export const auth = async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) {
        return res.status(400).json({
            message: 'User not found'
        });
    }
    res.status(200).json({
        message: 'Auth Successful',
        user
    });
}
