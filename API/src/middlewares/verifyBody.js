
const verifyBody = {
    
    verifyTitle:  function(req, res, next){
        const { title } = req.body
        if(!title){
            res.status(400).json()
            return
        }
        next()
    },

    verifyStatus:  function(req, res, next){
        const { status } = req.body
        if(!status){
            res.status(400).json()
            return
        }
        next()
    },

}

module.exports = verifyBody