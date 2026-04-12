const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const mongoose = require('mongoose')
//* routes 
const blogRoutes = require('./routes/blogRoute')
const cors = require('cors')

//! middleware
app.use(express.json())
app.use(cors())


//! route use
//* first ai route tar por blogRoute.js route
//? add post method
app.use('/add-post',blogRoutes)

//? get post method 
app.use("/",blogRoutes)

//? get blog by id 
app.use("/blog", blogRoutes)

//? delete blog by id
app.use("/delete",blogRoutes)

//? update blog 
app.use("/update",blogRoutes)


async function main() {
    await mongoose.connect(process.env.DB_URL)
}
main().then(() => console.log("MongodBD database connected successfully")
)


app.listen(port, () => {
    console.log(`${port} server running.`);
})
// mdtahinhassanjihad_db_user
// IN8g0x39Fm1zGucQ