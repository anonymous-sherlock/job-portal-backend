const app = require('./app');
const DbConnect = require('./Database/Database');
const PORT= process.env.PORT || 8800 ;
const cloudinary  = require('cloudinary')
// database connection 
DbConnect();
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_SECRET,
    api_secret:process.env.CLOUDINARY_API_KEY
})
app.listen(PORT,()=>{
    console.log(`server is running on http//localhost:${PORT}`);
})