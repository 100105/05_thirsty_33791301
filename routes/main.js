// Create a new router
const express = require("express");
const router = express.Router();

// define our data
var shopData = {
    shopName: "Drinks r us",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        {
            location: "London",
            manager: "Sara Shah",
            address: "59 Maitland Road, London E2 9HT"
        },
        {
            location: "Luton",
            manager: "Yasin Khaled",
            address: "23 Gullane Road, Luton, LU3 5HB"
        },
        {
            location: "Southampton",
            manager: "Maria Loskor",
            address: "12 Russia Lane , Southampton SH1 2XS"
        }
    ]
};

// Main page
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
}); 

// About page
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
}); 

// Search page
router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
}); 

router.get('/search_result', function (req, res) {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category); 
});

// Register page
router.get("/register", (req,res) => {
    res.render("register.ejs", shopData); 
}); 
 
router.post("/registered", (req, res) => { 
    res.send(
      'Hello ' + req.body.first + ' ' + req.body.last + 
      ', you are successfully registered! We’ll send a confirmation email to ' + 
      req.body.email + ' now.'
    );   
});

// Survey page
router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
}); 

// Survey submits
router.post("/survey_submitted", (req, res) => {
    const surveyData = {
        ...req.body,
        student: req.body.student ? true : false  
    };

    res.render("survey_results", {  
        shopName: shopData.shopName,
        data: surveyData
    });
});

// Export the router
module.exports = router;
