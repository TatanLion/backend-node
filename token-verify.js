const jsonwebtoken = require('jsonwebtoken')

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcyODQ5Nzc2M30.RUNnlB_ftJwBWVpEJND7Z_V_3BGJ4IjmfAtaR-vq2KI';

function verifyToken(token, secret){
    return jsonwebtoken.verify(token, secret)
}

const payload = verifyToken(token, secret)
console.log(payload);