import { Dev } from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const Login = async (email, password) => {
    try {
        const user = await Dev.findOne({ email });
        if (!user) return { status: 404, message: "Not Found" };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return { status: 400, message: "Invalid Credentials" }

        const jwtToken = generateToken(user._id);

        return { status: 201, message: jwtToken }
    } catch (error) {
        return { status: 500, message: error }
    }
}

const SignIn = async (username, email, password) => {
    try {
        const user = await Dev.findOne({ email });
        if (user) return { status: 404, message: "User Already In Use" };

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Dev({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        if (!savedUser) return { status: 401, message: "Unable to save User" }

        const jwtToken = generateToken(savedUser._id);

        return { status: 201, message: jwtToken }
    } catch (error) {
        return { status: 500, message: error }
    }
}

export { Login, SignIn };