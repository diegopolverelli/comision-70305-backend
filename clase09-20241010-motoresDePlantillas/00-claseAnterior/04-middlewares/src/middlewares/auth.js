export const auth=(req, res, next)=>{
    let {email, password}=req.query
    if(!email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete datos`})
    }

    if(email!="admin@coder.com" || password!="CoderCoder123"){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales invalidas`})
    }

    next()
}