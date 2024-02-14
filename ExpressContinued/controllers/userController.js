const User = require('../models/User')

const getAllUsers = (req, res) => {
    // Make a query on db using the model we have just imported ...
    // to find records with a specific conditions
    // User.find({lastName: "Sharma", email:"abc@gmail.com"}).then((result) => {
    User.find({}).then((result) => {
        console.log('records fetched: ', result);
        res.json(result)
    }).catch((err) => {
        res.json({"message": "error fetching the records"})
    })
    // res.send('Welcome to get /user route')
}

const creatAUser = (req, res) => {
    // 1. create a object following the schema of user
    // 2. save that object to db using .save() on top of that object

    // TODO: take input from the user insted of hardcoding it ...
    const newObj = new User({
        firstName: "xyz",
        lastName: "Kumar",
        email: "xyz@gmail.com"
    });
    newObj.save().then((res) => {
        res.json({"message": "document created successfully!"});
    }).catch((err) => {
        res.json({"message": "error creating document"});
    })
    // res.send('Welcome to post /user route')
}

module.exports = {
    getAllUsers,
    creatAUser
}