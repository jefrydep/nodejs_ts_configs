import { TokenExpiredError } from "jsonwebtoken";

// import  Jwt  from "jsonwebtoken";
const jwt = require('jsonwebtoken')

export const generateJWT= (userId?:number,userName?:string)=>{
    return new Promise((resolve,reject)=>{
        const payload = {userId,userName};

        jwt.sign(payload,process.env.SECRET_JWT,{
            expiresIn:'2h'
        },(err:Error,token:TokenExpiredError)=>{
            if(err){
                console.log(err);;
                reject('no se pudo generar el token')
                
            }
            resolve(token)
        })

    })

}