const express=require("express");
const app=express();
let count;
count=0;
const data=require("./data.json");
const port=1000;
app.listen(port,()=>{
    // console.log(Object.keys(data)[0]);
    console.log("listening");
});

app.set("view engine","ejs");

// app.use((req,res)=>{
//     count++;
//     console.log("request no",count);
//     // console.log(data.name);
// });

app.get("/",(req,res)=>{
    res.render("home.ejs",{ data,port });
    console.log("home called");
});
app.get("/:username",(req,res)=>{
    let {username}=req.params;
    let val=0;
    for (const per of Object.keys(data)) {
        // console.log(per);
        // console.log("--");
        // console.log(username);
        if(per==username){
            res.render(`template.ejs`,{ data,username,val });
            val++;
            // let n=window[username];
            console.log(`${username} called`);
            return;
        }
        val++;
    }
    
    res.render(`default.ejs`);
    console.log(`default called`);
    
});