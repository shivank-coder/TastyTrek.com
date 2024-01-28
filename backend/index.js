const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
const Stripe=require('stripe');
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

// payment method implementation

console.log(process.env.STRIPE_SECRET_KEY);

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/checkout-payment',async(req,res)=>{
  // console.log(req.body);

  try{
    const params={
submit_type:"pay",
mode:"payment",
payment_method_types:['card'],
billing_address_collection:"auto",
shipping_options:[{shipping_rate:"shr_1OdZA3SJ6Ij3FdkhiWHq19WM"}],

line_items:req.body.map((item)=>{
  return{
    price_data:{
      currency:"inr",
      product_data:{

        name:item.name,
        // image:[item.image],
 },
 unit_amount: item.price * 100,

 },
adjustable_quantity:{
  enabled:true,
  minimum:1,

},
quantity:item.qty,

  }

}) ,
success_url: `${process.env.FRONTEND_URL}/success`,
cancel_url:`${process.env.FRONTEND_URL}/cancel`,

}
const seasion=await stripe.checkout.sessions.create(params);
console.log(seasion);
res.status(200).json(seasion.id)
  }
  catch(err){
res.status(err.statusCode || 500).json(err.message);
  }
})




 

