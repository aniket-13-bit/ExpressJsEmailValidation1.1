const Post = require("../model/Post");
const { post } = require("../route/Post");


exports.getPostById = (req, res, next, postId) => {
  // PostId is coming from the router.param
  // .findById() method will find the todo which has id==postId
  Post.findById(postId).exec((err, post) => {
    if (err || !post  && req.body.email !== PostMongoose.email) {
      return res.status(400).json({
        error: "404 post not found",
      });
    }
    // store that post in req.post so that other functions can use it
    req.post = post;
    // Because this is a middleware we have to call the next()
   // which will pass the control to the next function in the middleware stack
    next();
  });
};


  exports.getPost = (req, res) => {

    return res.json(req.post);
  };

  exports.createPost = (req, res) => {
    // we will get json data from the frontend i.e. req.body
    const post = new Post(req.body);
  
    // create a post instance by passing 'task' field from 'req.body'
    post.save((err, task) => {
      if (err || !task &&  req.body.email !== PostMongoose.email) {
        return res.status(400).json({
          error: "something went wrong or email not found",
        });
      }
      // post is created
      // send the created post as json response
      res.json({ task });
    });
  };

  exports.updatePost= (req, res) => {
 
    const post = req.post;
 
    post.task = req.body.task;
  

    post.save((err, t) => {
      if (err || !t &&  req.body.email !== PostMongoose.email) {
        return res.status(400).json({
          error: "something went wrong while updating,or email not found",
        });
      }
     
      res.json(t);
    });
  };

