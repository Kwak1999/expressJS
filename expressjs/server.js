const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users_Router');
const postsRouter = require('./routes/post_Router');
const mongoose = require("mongoose");

const PORT = 4000;



const app = express();

mongoose.connect('mongodb+srv://gmlqja7913_db_user:Efvj5pp6IJCEoBVI@cluster0.b7gweha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`);
});

app.get('/', (req, res) => {
    res.render('index', {
        imageTitle: "It is a forest"
    })
})


app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});