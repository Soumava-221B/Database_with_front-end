const User = require('../models/User')

const getAllUsers = (req, res) => {
    // Make a query on db using the model we have just imported ...
    // to find records with a specific conditions
    // User.find({lastName: "Sharma", email:"abc@gmail.com"}).then((result) => {
    User.find({}).then((result) => {
        // console.log('records fetched: ', result);
        res.json(result)
    }).catch((err) => {
        res.json({"message": "error fetching the records"})
    })
    // res.send('Welcome to get /user route')
}

const creatAUser = (req, res) => {
    // 1. create a object following the schema of user
    // 2. save that object to db using .save() on top of that object

    // const newObj = {
    //     firstName: req.body.f,
    //     lastName: req.body.l,
    //     email: req.body.e
    // }

    const newObj = new User(req.body);

    console.log(newObj);
    newObj.save().then((result) => {
        res.status(201).json({"message": "document created successfully!"});
    }).catch((err) => {
        console.log(err)
        res.status(500).json({"message": JSON.stringify(err)});
    })
}

module.exports = {
    getAllUsers,
    creatAUser
}