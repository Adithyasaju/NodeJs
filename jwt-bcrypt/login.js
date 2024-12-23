import bcrypt from 'bcrypt'

let user={
    email:"rahul@gmail.com",
    password:"IIL",
    cc:'123412351236',
    cvv:'123'
}

let salt=bcrypt.genSaltSync(10)
let new_psw=bcrypt.hashSync(user.password,salt)

user={...user,password:new_psw}

let flag=bcrypt.compareSync("III",user.password)
if(flag){
    console.log("Login Success");
}
else{
    console.log("Login Failed");
    
}