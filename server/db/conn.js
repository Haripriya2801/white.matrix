const mongoose=require('mongoose');

//mongodb://localhost:27017/userdata

mongoose.connect("mongodb+srv://chharipriya2801:priya@cluster0.xwlv3tu.mongodb.net/",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected ");
}).catch((err)=>{
    console.log("No Connection to Database");
})