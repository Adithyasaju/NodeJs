import bcrypt from 'bcrypt'

let user={
    'email':'raghul@gamil.com',
    'cc':'123412351236',
    'cvv':'123'
}

let salt=bcrypt.genSaltSync(10);    //number should be 5-10

let new_cc =bcrypt.hashSync(user.cc,salt)
let new_cvv=bcrypt.hashSync(user.cvv,salt)


console.log(user.cc);
console.log(new_cc);
console.log(user);

user={
    ...user,cc:new_cc,cvv:new_cvv
} 
console.log(user);


//node hash.js
