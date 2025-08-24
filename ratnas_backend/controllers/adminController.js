import jwt from 'jsonwebtoken'
// API for admin login
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token,message:"Admin Login Successfull!"})
        } else{
            res.json({success:false,message:"Invalid Email or Password"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {adminLogin}