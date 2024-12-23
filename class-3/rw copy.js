import fs from 'fs'
fs.readFile('Users.json','utf-8',(err,data)=>{
    if(err){
        console.log('Unable to Read - : ${err.message}')
    }else{
    console.log(typeof data);
    let Users = JSON.parse(data)
    console.log(typeof Users);
    console.log(Users.length);
    
    
    }
    
})