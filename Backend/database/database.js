import  mongoose from 'mongoose';

export const database = ()=>{

    mongoose.connect(process.env.DATABASE,{dbName:"E-commerce"}).then(()=>{

        console.log("database is connected!");

    })
    .catch((err)=>{

        console.log(err.message);
    });

}