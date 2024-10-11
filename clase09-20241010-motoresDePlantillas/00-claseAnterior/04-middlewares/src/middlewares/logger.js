export const logger=(req, res, next)=>{
    console.log(`Fecha: ${new Date().toLocaleDateString()} - url: ${req.url} - método: ${req.method}`)

    next()
}