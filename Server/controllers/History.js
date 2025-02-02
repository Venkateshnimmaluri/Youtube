import History from '../models/History.js'
import mongoose from 'mongoose'

export const HistoryController = async(req,res)=>{
    const HistoryData = req.body;

   // console.log(HistoryData)

    const addtoHistory = new History(HistoryData);

    try {
        await addtoHistory.save();
        res.status(200).json('added to Watch Later')
      //  console.log("Done")
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllHistoryController=async(req,res)=>{
    try {
        const files= await History.find();
        res.status(200).send(files)   
    } catch (error) {
        res.status(404).send(error.message)
        
    }
   
}

export const deleteHistoryController=async(req,res)=>{
    const { userId : userId} = req.params;
    try {
        await History.deleteMany({
            Viewer : userId
        })
        res.status(200).json({message: "Removed from your history"})
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}