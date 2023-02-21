import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express'
// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken')
export const verifyToken = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        let token = req.header('Authorization');
        if(!token){
            return res.status(403).send('AccesDenied');
        }
        if(token.startsWith("Bearer ")){
            // token = token.slice(7, token.length).trimLeft();
            token = token.slice(7, token.length).trimStart()
        }
        const verified = jwt.verify(token, process.env.SECRET_JWT);
        // req.body = verified;
        req.body.userId =verified

        next()
    } catch (err:Prisma.PrismaClientKnownRequestError |any) {
        res.status(500).json({error: err.message})
        
    }
}

// const validarJwt = (req, res = response, next) => {

//     //x-token headers

//     const token = req.header('l-token');
//     if(!token){
//         return res.status(401).json({
//             of:false,
//             msg:'no hay token en la peticion'
//         });
//     }
//     try {
//         const {uid,name} = jwt.verify(
//             token,
//             process.env.SECRET_JWT_SEED
//         );
//         req.uid = uid;
//         req.name = name;
//     } catch (error) {
//         // console.log(error);
//         return res.status(401).json({
//             of:false,
//             msg:'Token no valido'
//         })
        
//     }

//     next();
// }


// module.exports = {
//     validarJwt
// }