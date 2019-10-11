const express = require('express')

const app = express()

app.use(express.json())

// here goes our posts

const posts = [
    {id: 1, name: "post1"},
    {id: 2, name: "post2"},
    {id: 3, name: "post3"},
    {id: 4, name: "post4"},
    {id: 5, name: "post5"},

]

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req,res) => {
    const newPost = {id: posts.length+1, name: 'new post'}
    posts.push(newPost)
    res.send(posts)
})

app.put('/posts/:id', (req,res) => {
   

    const postId = posts.find(c => c.id === parseInt(req.params.id))
    if (!postId) return res.status(404).send('post not found')
    res.send('post was in post')

})


app.delete('/posts/:id', (req, res) => {
    const postId = posts.find(c => c.id === parseInt(req.params.id))
    if (!postId) return res.status(404).send('post not found')
    res.send('post has been deleted')
})
app.listen(3000, () => {
    console.log("server is on...")
})