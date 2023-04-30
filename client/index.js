const express = require('express')
const fs = require('fs')

const app = express()

const videoFileMap={
    'cdn': 'videos/cdn.mp4',
    'generate-pass': 'videos/generate-pass.mp4',
    'cdn': 'videos/cdn.mp4',
}

app.get('/videos/:filename', (req, res)=>{

})











app.listen(3000, ()=>{
    console.log('server is listening on port 3000')

})