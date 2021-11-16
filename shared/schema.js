const joi = require("joi")

const schema= {

    registerSchema:joi.object({

        userName:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().alphanum().min(6).required()
    }),

    loginSchema:joi.object({
        email:joi.string().email().required(),
        password:joi.string().alphanum().min(6).required()
    })

}

module.exports=schema;