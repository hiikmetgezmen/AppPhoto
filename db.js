import mongoose from "mongoose";

const ct = ()=>{
    mongoose.connect(process.env.UR,{
        dbName:"DbGallery",
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("succes");
    }).catch((err)=>{
        console.log(`err:, ${err}`);
    });
};

export default ct;