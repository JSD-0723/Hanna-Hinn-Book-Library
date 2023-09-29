import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../models";
import { jwtKey } from "../config/secretKeys.config";

export const userRegister = (newUser: User) => {
  return new Promise<Object>((resolve) => {
    User.create({
      fname: newUser.fname,
      lname: newUser.lname,
      email: newUser.email,
      password: hashSync(newUser.password, 10),
    })
      .then((result) => {
        console.log("User Created Successfully");
        resolve({
          success: true,
          message: "User Created Successfully",
          user: {
            fullName: `${result.fname} ${result.lname}`,
            email: result.email,
            id: result.id,
          },
        });
      })
      .catch((err) => {
        console.log(`User Creation Failed: ${err.message}`);
        resolve({
          success: false,
          message: "User Creation Failed",
          error: err,
        });
      });
  });
};

export const userLogin = (email, password) => {
  return new Promise<any>((resolve) => {
    User.findOne({ where: { email: email } }).then((user) => {
      if (!user) {
        console.log("User not found");
        return resolve({
          status: 401,
          response: {
            success: false,
            message: "Could not find the user.",
          },
        });
      }

      if (!compareSync(password, user.password)) {
        console.log("Incorrect Password");
        return resolve({
          status: 401,
          response: {
            success: false,
            message: "Incorrect Password",
          },
        });
      }

      const payload = {
        email: user.email,
        id: user.id,
      };

      const token = jwt.sign(payload, jwtKey, { expiresIn: "1d" });
      console.log("Logged In Successfully");
      return resolve({
        status: 200,
        response: {
          success: true,
          message: "Logged In Successfully",
          token: "Bearer " + token,
        },
      });
    });
  });
};
