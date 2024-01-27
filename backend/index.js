const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');

const mongoose=require('mongoose');
const PORT=3400 || 4000;


mongoose.connect(process.env.DATABASE_URL,{
   useNewUrlParser: true,
   useUnifiedTopology: true,

}).then(() => {
   console.log('Database connected successfully');
 })
 .catch((error) => {
   console.error('MongoDB connection error:', error);
 });

 const userSchema=mongoose.Schema({
   firstName:String,
   lastName:String,
   email:{
      type:String,
      unique:true,

      },
   Password:String,
   confirmPassword:String,
   image:String,
 })


const userModel=mongoose.model("user",userSchema);








app.use(cors());//middlewere works there
app.use(express.json({limit:"10mb"}));

 app.listen(PORT,(req,res)=>{
    console.log(`server is running at PORT ${PORT}`);
 })


 app.get('/',(req,res)=>{
    res.send("sever is running ");
 })

 
 app.post('/signup',(req,res)=>{
    console.log(req.body);
    const {email}=req.body;
    userModel.findOne({ email: email }).exec()
    .then(result => {
      console.log(result);
      if(result)
      {
         res.send({message:"email id already exist"});
      }
      else{
         const data=userModel(req.body);
         const save=data.save();
         res.send({message:"user registered successfully"});
      }
    })
    .catch(err => {
      console.error(err);
      // Handle errors here
    });
  
 })
 app.post('/login', (req, res) => {
   console.log(req.body);
   const { email, Password } = req.body;
 
   userModel.findOne({ email: email, Password: Password }).exec()
     .then(result => {
       console.log(result);
       if (result !== null) {
         res.send({ message: "login successfully" });
       } else {
         res.send({ message: "user not registered or incorrect password" });
       }
     })
     .catch(err => {
       console.error(err);
       // Handle errors here
       res.status(500).send({ message: "Internal Server Error" });
     });
 });
 
 
const schemaProduct = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number, // Assuming price is a number, adjust if necessary
    required: true,
  },
  description: {
    type: String,
  },
});

app.post("/uploadProduct",async(req,res)=>{
  console.log(req.body);
  const data=await productModel(req.body);
  const datasave=await data.save();
  res.send({message : "data uploaded  "});

})

const productModel = mongoose.model("Product", schemaProduct);

app.get("/product",async(req,res)=>{

  const data=await productModel.find({})
  res.send(JSON.stringify(data));


})


 

