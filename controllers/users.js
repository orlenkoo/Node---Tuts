const mongoose = require("mongoose");
const User = require("../models/users");

const indexUser = (_req, res, next) => {
  // Retrieve all users from Mongo
  mongoose.model("Users").find({}, (error, users) => {
    if (error) {
      return next(error);
    }
    
    res.format({
      
      ejs: () => {
        res.render("./users/list", {
          title: "Users list",
          users: users,
        });
      },
      
      json: () => {
        res.json(users);
      },
    });
  });
};

const storeUser = (req, res) => {
  // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
  const { name } = req.body;

  //call the create function for our database
  mongoose.model("Users").create(
    {
      _id: new mongoose.Types.ObjectId(),
      name: name,
    },
    (error, user) => {
      if (error) {
        return res.send("There was a problem adding the information to the database.");
      }
      //user has been created
      console.log("POST creating new user: " + user);
      res.format({
        
        ejs: function () {
          
          res.location("precovid");
          
          res.redirect("/precovid");
        },
        
        json: function () {
          res.json(user);
        },
      });
    }
  );
};

const getUser = (req, res, next) => {
  mongoose.model("Users").findById(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    }
    console.log("GET Retrieving ID: " + user._id);
    res.format({
      ejs: () => {
        res.render("users/view", {
          title: "View of " + user.name,
          user: user,
        });
      },
      json: () => {
        res.json(user);
      },
    });
  });
};

module.exports = { indexUser, getUser, storeUser };
