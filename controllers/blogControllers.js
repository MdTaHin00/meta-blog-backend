
const Blog = require("../models/blogModel")

//? post method add data
const addPost = async (req, res) => {
    const bodyData = req.body;
    //* Blog -> models folder blogModel file require
    //* save()-> mongoDB data base data save kola
    const blog = await new Blog(bodyData).save()
    res.status(202).json({ message: "Post created successfully",blog:blog})
}

//? get method show all data 
const allShowData = async (req, res) => {
    try {
        //* -1 -> present create data potomay asva
        const blog = await Blog.find().sort({ createdAt: -1 })
        res.status(202).json({ message: "Blogs Fetched Successfully", blog: blog })

    } catch (error) {
        console.log(error);
        res.status(404).send({ message: "Error fetching all blogs" })
    }
}



//?  get blog by id 
const singleBlogShow = async (req, res) => {
    try {
        const { id } = req.params
        const blogs = await Blog.findById(id)
        res.status(202).send({ message: "Blog is fetched successFully", blogs: blogs })
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: "Error fetching id blogs" })
    }

}

//?  delete method
const deleteData = async (req, res) => {
    try {
        const id = req.params.id
        //* findByIdAndDelete -> data delete kola
        const blog = await Blog.findByIdAndDelete(id)
        if (!blog) {
            res.status(404).send({ message: "Blog not found" })
        }
        res.status(200).send({ message: "Blog deleted successFully", blog: blog })
    } catch (error) {
        res.status(404).send({ message: "Blog Deleted failed", error })
    }
}

//? update data by id & update method
const updateData = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!blog) {
            res.status(404).send({ message: "Blog n found" })
        }
        res.status(200).send({ message: " Blog update Successfully" })
    } catch (error) {
        res.status(404).send({ message: "Blog Update failed", error })
    }
}


module.exports = {
    addPost,
    allShowData,
    singleBlogShow,
    deleteData,
    updateData
}