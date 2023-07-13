'use strict'
const User = require("../../models/User"); 

const output = {
    home : (req, res) => {
        res.render("home/index"); 
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
    registration: (req, res) => {
        res.render("home/registration");
    }
}


const process = {
    home: async (req,res) => {
        const user = new User(req.body);
        const response = await user.home();
        return res.json(response);
    },
    login: async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
    registration: async (req,res) => {
        const user = new User(req.body);
        const response = await user.registration();
        return res.json(response);
    }
};


module.exports = {
    output,
    process,
};
