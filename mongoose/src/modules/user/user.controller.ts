import User from "./user.model"

 
const registerUser = (req, res) =>{
    const payload = req.body;
    const user = new User(payload);
    const data  = await User.save();

    const res.send ({
        success : true,
        message : "user create successfully",
        data
    })

}

export {registerUser}