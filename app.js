const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')
const res = require('express/lib/response')
const productRouter = express.Router()

const app = express()
const PORT = process.env.PORT || 4000

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views")
app.set("view engine", "ejs")


productRouter.route("/").get((req,res) => {
    res.render("products",{
        products : [
            {productTitle:'น้ำยาล้างจาน', productDescription: 'น้ำยาล้างจานสูตร1ดีเลิศ', productPrice: 45},
            {productTitle:'น้ำยาล้างจาน2', productDescription: 'น้ำยาล้างจานสูตร2ดีเลิศ', productPrice: 45},
            {productTitle:'น้ำยาล้างจาน3', productDescription: 'น้ำยาล้างจานสูตร3ดีเลิศ', productPrice: 45},
            {productTitle:'น้ำยาล้างจาน4', productDescription: 'น้ำยาล้างจานสูตร4ดีเลิศ', productPrice: 45},           
        ],
    })
})

productRouter.route("/1").get((req,res) => {
    res.send("hello world !! I am Product 1")
})

app.use("/products", productRouter)

app.get("/", (req,res) =>{

    res.render('index', {username: 'focuszaza55',customer: ['kitti','sanpypop','cussy']})
})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.red(" : " + PORT))
    
    
})