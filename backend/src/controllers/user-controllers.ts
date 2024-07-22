import User from "../models/user.js";
import { NextFunction, Request, Response } from "express";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";


export const getAllUsers = async (
    req : Request,
    res : Response,
    next : NextFunction,
) => {
    //get all users from databse
    try {
        const users = await User.find()
        return res.status(200).json({message : "OK", users});
    }
    catch (error) {
        console.log(error)
        return res.status(200).json({message : "ERROR", cause : error.message});
    }
}


export const userSignup = async (
    req : Request,
    res : Response,
    next : NextFunction,
) => {
    //user signup
    try {
        console.log("Signup request received")
        const {name, email, password} = req.body;
        const existinguser = await User.findOne({email : email})
        if(existinguser) return res.status(401).send("user already registered");
        const hashed = await hash(password, 10);
        const user = new User({
            name,
            email,
            hashed,
        });
        await user.save();
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });

        const token = createToken(user._id.toString(), user.email, "7d");

        res.cookie("auth_token", token, {
            path : "/",
            domain : "localhost",
            expires : new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            httpOnly: true,
            signed : true,
        });

        return res.status(201).json({message : "OK", name : user.name, email : user.email});
    }
    catch (error) {
        console.log(error)
        return res.status(200).json({message : "ERROR", cause : error.message});
    }
}

export const userLogin = async (
    req : Request,
    res : Response,
    next : NextFunction,
) => {
    //user signup
    try {
        console.log("Login request received")
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(200).send("user does not exist");
        }
        const pwCorrect = await compare(password, user.password)
        if (!pwCorrect) {
            return res.status(403).send("Incorrect Password");
        }
                // create token and store cookie
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });

        const token = createToken(user._id.toString(), user.email, "7d");

        res.cookie("auth_token", token, {
            path : "/",
            domain : "localhost",
            expires : new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            httpOnly: true,
            signed : true,
        });

        return res.status(200).json({message : "OK", name : user.name, email : user.email});

    }
    catch (error) {
        console.log(error)
        return res.status(201).json({message : "ERROR", cause : error.message});
    }
};


export const userLogout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user token check
      const user = await User.findById(res.locals.jwtData.id);
      if (!user) {
        return res.status(401).send("User not registered OR Token malfunctioned");
      }
      if (user._id.toString() !== res.locals.jwtData.id) {
        return res.status(401).send("Permissions didn't match");
      }

      res.clearCookie(COOKIE_NAME, {
        httpOnly: true,
        domain: "localhost",
        signed: true,
        path: "/",
      });
  
      return res
        .status(200)
        .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };
