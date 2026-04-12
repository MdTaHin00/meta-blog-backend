const express = require('express');
const { addPost, allShowData, deleteData, singleBlogShow, updateData } = require('../controllers/blogControllers');
const router = express.Router();


//* post method add data
router.post("/", addPost)

//* get method all show data 
router.get("/",allShowData)

//* get blogs by id 
router.get("/:id", singleBlogShow)

//* delete method
router.delete("/:id",deleteData )

//* update data by id & update method
router.put("/:id",updateData)

//! export
module.exports = router
