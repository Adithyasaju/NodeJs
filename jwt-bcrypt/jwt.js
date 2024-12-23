import jwt from 'jsonwebtoken'

let payload={
    'ename':"Rahul",
    'Password':'IIL'
}
let token =jwt.sign(payload,"Better Luck Next Time")
console.log(token);

let new_Payload=jwt.verify(token,"Better Luck Next Time")
console.log(new_Payload);
