const Users2 = require('../Models/User2')


//Add Users
exports.addUsers2 = async (req, res) =>{
  
    var user = new Users2({
        cni:req.body.cni,
        noms:req.body.noms,
        ville:req.body.ville,
        statut:req.body.statut,
        details:req.body.details
    })
    user.save().then((result) => {
       res.status(201).json({
            message:'creation effectuée',
            data: result
       })
    })

    }

    exports.getUser2 = async (req, res) => {
        const {_id} = req.body
         
         if(!_id) {
           return Error("une erreur est survenue")
         } else{
           const user = await Users.findById(_id)
       
           if(!user) {
             throw Error("Cet utilisateur n'existe pas")
           }
       
           res.status(200).json({
            cni:req.body.cni,
            noms:req.body.noms,
            ville:req.body.ville,
            statut:req.body.statut,
            details:req.body.details,
             message:'ok',
             
           })
         }
       
         
       }
