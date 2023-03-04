import mongoose from 'mongoose'
// HERE WE CONNECT TO MONGO DB THEN IMPORT THIS FILE TO INDEX JS TO CONTINUE CONNECTING
const connectDB=async(url)=>{
  mongoose.set('strictQuery',true)

  mongoose.connect(url)
  .then(()=>{
    console.log('Mongo DB connected')
  })
  .catch((err)=>{
    console.log(err)
  })
}
export default connectDB;