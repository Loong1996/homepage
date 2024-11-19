const express = require('express')
const app = express();

const listen_port = 3000

app.use(express.static('assets'))
app.use(express.static('css'))
app.use(express.static('js'))

// Pug Engine
app.set('views', './pug')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('intro', { 
        title: 'Hey',
        message: 'Hello there!',
        authenticated:true,
        friendnum: 22
    })
  })

app.listen(listen_port, () => {
  console.log(`Example app listening on port ${listen_port}`)
})
