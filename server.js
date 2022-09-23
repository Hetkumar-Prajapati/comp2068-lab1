const express = require('express')
// create an express objec. " new" keyword not use in js
const app = express()

//add http request handler
let mom = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('My mom is a lovely lady. I like her art of cooking and she is an extra-ordinary HomeMakker. She a very great conunciler and obviously i love her the most.')
    res.end()
}

let dad = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('My dad is a great bussiness man. I get shock to see his ideas to get customers attracted to the bussiness and make profit out of it. He is a great helper to people and is well know for is good doing in the locality.')
    res.end()
}

let me = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('I really love doing html,css, and js. Further more i am learning ReactJs , basically use of props and useState in react and reactdom. I am so excited to start some job in front end but unfortunatelly i am unable to get co-op. Fingers crossed for this winter co-op!!')
    res.end()
}

let Home = (req,res)=>{
    if (req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('Home Page!!')
    res.end()
    }
    else{
        res.writeHead(404)
        res.write('Not Found')
        res.end()
    }
}

//route helps requests to our handler function
app.use('/mom',mom)     //map mom variable to mom url
app.use('/dad',dad)     //map dad variable to dad url
app.use('/me',me)       //map me variable to me url
app.use('/',Home) // used at last after trying other urls 

//start exress web server
app.listen(3000)
console.log('The Server is Running on 3000 port!!!')