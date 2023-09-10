const transectionModel = require("../models/tansectionModel")

const getAllTransection = async(req ,res) => {
    console.log(req.body)
    try{
        const transections = await transectionModel.find({userid:req.body.userid,});
        res.status(200).json(transections);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}


const addTransection = async (req ,res) => {
    try{
        const newTransection = new transectionModel(req.body)
        await newTransection.save();
        res.status(201).send("transection created")
        
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
}



module.exports = { getAllTransection, addTransection}


