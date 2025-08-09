require('dotenv').config()
const mongoose = require('mongoose')

const password = process.env.MONGODB_PASSWORD
const username = process.env.MONGODB_USERNAME

if (!password || !username) {
    console.error('Missing credentials')
    process.exit(1)
}

const url = `mongodb+srv://${username}:${password}@cluster0.lh9zdol.mongodb.net/blogApp?
retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

Blog.find({}).then(result => {
    result.forEach(blog => {
        console.log(blog)
    })
    mongoose.connection.close()
})