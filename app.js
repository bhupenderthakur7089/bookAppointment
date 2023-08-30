const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');

const con = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const Appointment = require('./models/appointment');

const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const appointmentRoutes = require('./routes/appointment');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findAll({ where: { id: 1 } })
        .then(user => {
            req.user = user[0];
            next();
        })
        .catch(err => {
            console.log(err);
        })
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(appointmentRoutes);
app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product, { constraints: true, onDelete: 'CASCADE' });

con
    // .sync({ force: true })
    .sync()
    .then((result) => {
        console.log(result);
        return User.findAll({ where: { id: 1 } })
    })
    .then(user => {
        if (!user[0]) {
            return User.create({ name: 'dummyUser', email: 'abc@dummy.com' });
        } else {
            return user;
        }
    })
    .then(user => {
        console.log(user)
        app.listen(3000);
    })
    .catch(err => console.log(err));

