const express = require('express');
const app = express();
const path = require('path');
const filePath = path.join(__dirname, 'frontend/pages/');

app.use(express.static('frontend'));
app.use(express.static('frontend/pages'))

//change this if you are running into issues
const PORT = 3000;

app.get('/',(req,res)=>{
    res.sendFile(filePath+'index/index.html');
})

app.get('/workshops',(req,res)=>{
    res.sendFile(filePath+'workshops/workshops.html');
})

app.get('/events',(req,res)=>{
    res.sendFile(filePath+'events/events.html');
})

app.get('/calendar',(req,res)=>{
    res.sendFile(filePath+'calendar/calendar.html');
})

app.get('/important-links',(req,res)=>{
    res.sendFile(filePath+'important-links/important-links.html');
})

app.get('/leadership',(req,res)=>{
    res.sendFile(filePath+'leadership/leadership.html');
})

app.get('/merchandise',(req,res)=>{
    res.sendFile(filePath+'merchandise/merchandise.html');
})

app.get('/projects',(req,res)=>{
    res.sendFile(filePath+'projects/projects.html');
})

app.listen(PORT,()=>{
    console.log(`server online running on port ${PORT}\nhttp://localhost:${PORT}`);
});