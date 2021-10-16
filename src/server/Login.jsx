const express = require('express');
const loginRouter = express.Router();
const EncryptionKey = "Testing1230";
const Cryptr = require('cryptr');
const mongoose = require('mongoose');
const cryptr = new Cryptr(EncryptionKey);
const user = mongoose.model("User");
const ValidateLoginData = async (data) => {
    let returnMsg = {
        status: false,
        message: "",
        field: ""
    }

    if (data.mobile.trim() == "") {
        returnMsg.message = "Mobile No. is required field";
        returnMsg.field = "mobile";
        return returnMsg;
    } else if (data.password.trim() == "") {
        returnMsg.message = "Mobile No. is required field";
        returnMsg.field = "mobile";
        return returnMsg;
    } else {
        let isErr = false;
        const registeredMobileStatus = await user.find({ username: data.mobile}).exec().then(
            (registeredMobile) => {
                if (registeredMobile.length > 0) {
                    if (cryptr.decrypt(registeredMobile[0].password) != data.password.trim()) {
                        isErr = true;
                        returnMsg.message = "Entered Password is wrong.";
                        returnMsg.field = "password";
                        return returnMsg;
                    }
                } else {
                    isErr = true;
                    returnMsg.message = "Mobile No. " + data.mobile + " is not registered";
                    returnMsg.field = "mobile";
                    return returnMsg;
                }
                if (!isErr) {
                    return registeredMobile[0];
                }
            }
        );
        if (isErr) {
            return registeredMobileStatus;
        } else {
            return { status: true, ...registeredMobileStatus };
        }
    }
}


loginRouter.post("/login", (req, res) => {
    const loginData = req.body;
    ValidateLoginData(loginData).then((valdationResponse) => {
        if (valdationResponse.status) {
            let id = valdationResponse._doc._id;
            let mobile = valdationResponse._doc.mobile;
            let email = valdationResponse._doc.email;
            let name = valdationResponse._doc.name;
            res.send({ status: true, message: "you Logged in succesfully", userDetails: { id: id,email:email,name:name, mobile: mobile } });
        } else {
            res.send(valdationResponse);
        }
    });

});
module.exports = loginRouter;