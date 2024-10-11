export const formatName=(req, res, next)=>{
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toUpperCase()
    }
    req.codigo=999


    next()
}