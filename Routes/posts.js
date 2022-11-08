const router = require ("express").Router();
const User = require ("../Models/users");
const Post = require ("../Models/posts");



//CREATE
router.post("/", async (req,res) =>{
    const newPost = new Post (re.body);
    try{
        const savedPost =await newPost.save();
        res.status(200).json(savedPost)
    }catch (err){
        res.status(500).json(err)
    }
});


//UPDATE
router.put("/:id",async (req,res)=>{
    try{
        const post = post.findById(req.params.id);
        if(post.username === req.body.username){


    
        try{

            const updatedPost = await post.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new:true});
            res.status(200).json(updatedPost)
        }catch(err){
            res.status(500).json(err)

        }
    }else{
        res.status(401).json("You can update your post")
    }

    }catch(err)

});





router.get("/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const{password, ...others} = user._doc;
        res.status(200).json(others);

    }catch (err){
        res.status(500).json(err)
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const post = await post.findById(req.params.id)
        
        res.status(200).json(post);

    }catch (err){
        res.status(500).json(err)
    }
})

//GET ALL POSTS
router.get("/", async (req,res) =>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await this.post.find({username});
        }else if (catName){
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch (err){
        res.status (500).json(err);
    }
});



router.get("/",async (req,res)=>{
    try{
        const post = await post.findById(req.params.id)
        const{password, ...others} = user._doc;
        res.status(200).json(others);

    }catch (err){
        res.status(500).json(err)
    }
})

router.delete("/id:", async (re,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post has been deleted");
            } catch (err){
                res.status(500).json (err)
            }
        }else {
            res.status(401).json("You can delete your post")
        }
    }catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;
