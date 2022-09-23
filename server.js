const express = require('express')
// create an express objec. " new" keyword not use in js
const app = express()

//add http request handler
let mom = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('hello world')
    res.end()
}

let dad = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('goodbye world')
    res.end()
}

let me = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('goodbye world')
    res.end()
}

let Home = (req,res)=>{
    if (req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('Home Page')
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
console.log('The Server is Running on 3000 port!!')