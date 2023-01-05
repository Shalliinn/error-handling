const Expenseuser=require('../models/expenseuser')
const tryCatch=require('../utils/tryCatch')

exports.postexpense= tryCatch(async (req,res,next)=>{
        const expence=req.body.expence
        const description=req.body.description
        const category =req.body.category
        const data=await Expenseuser.create({
            expence:expence,
            description:description,
            category:category
        })
        res.json(data)
})

exports.getexpense=tryCatch(async (req,res,next)=>{
 
        const exp=await Expenseuser.findAll()
        res.status(200).json({Allexp:exp})
 })

 exports.deleteexpense=tryCatch(async (req,res,next)=>{
        const Eid=req.params.id;
        const data=await Expenseuser.destroy({where: {id:Eid}})
        res.sendStatus(200)
 })