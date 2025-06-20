import app from "../app";
import express, {Application, Request,Response} from 'express';
import { User } from "../models/users.model";
export const usersRoutes = express.Router();
usersRoutes.get("/", async(req : Request, res : Response) => {
    const users = await User.find({})
    res.status(201).json({
        success : true,
        message : "get user successfully",
        users
    })
    
})
usersRoutes.get("/:userId", async(req : Request, res : Response) => {
    const id = req.params.userId;
    const users = await User.findById(id);
    // const users = await user.findOne(_id = id);
    res.status(201).json({
        success : true, 
        message : "get a user successfully",
        users
    })
    
});
usersRoutes.patch("/:userId", async(req : Request, res : Response) => {
    const userId = req.params.userId;
    const body = req.body;
    //approach 1
      const users = await User.findByIdAndUpdate(userId,body, {new : true})
      //apporoach 2
    //   const users = await user.updat eOne({_id : userId},body, {new : true})

      //apporach 3
//  const users = await user.findOneAndUpdate(
//   { _id: id }, // Filter to find the document
//   { $set: { title: 'Learn Typescript', tags : {label : "Basic"} } }, // Update operations
//   { new: true } // Options: return the modified document
// );
    res.status(201).json({
        success : true, 
        message : " a user update successfully",
        users
    })
    
})
usersRoutes.post("/create-user", async(req : Request, res : Response) => {
    const body = req.body;
    //approach 1of post data
    // const user = new user({
    //     title : "Eat the frog book",
    //     content : "reading a book that named eat the frogs",
    //     tags : {label :  "database"}
    // })
    // await   user.save()

    //approach 2 data post
    const user = await User.create(body) 
    res.status(201).json({
        success : true,
        message : "create user successfully",
        user
    })
    
})
usersRoutes.delete("/:userId", async(req : Request, res : Response) => {
    const userId = req.params.userId;
    // apporaoach 1
          const users = await User.findOneAndDelete({_id : userId});
      //apporoach 2
    //   const users = await user.deleteOneOne({_id : userId},body, {new : true})
    //approach another
    //  user.deleteOne({ _id: userId})
    //   .then(result => {
    //     if (result.deletedCount > 0) {
    //        res.status(201).json({
    //     success : true, 
    //     message : " a user delete successfully",
        
    // })
    //     } else {
    //       console.log('user not found');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error deleting user:', error);
    //   });

        res.status(201).json({
        success : true, 
        message : " a user delete successfully",
        users
    })
  })