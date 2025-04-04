const usersStorage = require('../storage/usersStorage');
const { body, validationResult, query } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "must be a valid email address.";
const ageErr = "Age must be between 1 and 99";
const bioErr = "must be between 1 and 200 characters.";

const validateUser = [
    body("firstName").trim()
      .isAlpha().withMessage(`First name ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
      .isAlpha().withMessage(`Last name ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
    body("email").trim()
        .isEmail().withMessage(`Email ${emailErr}`),
    body("age").trim()
        .isNumeric().withMessage(`Age ${ageErr}`)
        .isInt({ min: 1, max: 99 }).withMessage(`Age ${ageErr}`),
    body("bio").optional().trim()
        .isLength({ min: 1, max: 200 }).withMessage(`Bio ${bioErr}`),
];

const validateSearch = [
    query("search").trim()
        .isAlpha().withMessage(`Last name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`)
        .toLowerCase(),
]
  
exports.usersListGet = (req, res) => {
    res.render('index', {
        title: 'Users List',
        users: usersStorage.getUsers(),
    })
}

exports.usersCreateGet = (req, res) => {
    res.render('createUser', {
        title: 'Create User',
    })
}

exports.usersCreatePost = [
    validateUser,
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('createUser',{
            title: 'Create User',
            errors:errors.array(),
        })
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect('/');
}]

exports.usersUpdateGet = (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    res.render('updateUser', {
        title: 'Update User',
        user,
    })
}

exports.usersUpdatePost = [
    validateUser,
    (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400). render('updateUser', {
            title: 'Update User',
            user: user,
            errors: errors.array(),
        })
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName, email, age, bio });
    res.redirect("/");
}]

exports.usersDeletePost = (req, res) => {
    usersStorage.deleteUser(req.params.id);
    res.redirect("/");
};

exports.usersSearchGet = (req, res) => [
    validateSearch,

    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty() {
            return res.status(400).render //left on here
        })
    }
]