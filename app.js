/* app.js */

//require express
const app = require("express")();

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

app.set('view engine', 'ejs');

//blog home page
app.get('/', (req, res) => {
  //render 'home.ejs' with list of posts
  res.render('home', { posts: posts })
})

app.get('/post/:id', (req, res) => {
  //locate our post in the posts array
  const post = posts.filter((post) => {
    return post.id == req.params.id;
  })[0];

  //render the post.ejs template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body,
  })
})

app.listen(8080);

console.log("Listening on port 8080");
