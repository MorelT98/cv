// Import libraries
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Initialize libraries
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Allow node to use ejs files
app.set('view engine', 'ejs');


// ------------------ GET REQUESTS ----------------------
app.get("/", function(req, res) {
    res.render("index", {
        stylesheets: ["/css/styles.css"]
    });
});

app.get("/electronics", (req, res) => {
    res.render("electronics", {
        stylesheets: ["/css/styles.css", "css/electronics.css"],
        scripts: ['/scripts/slideshow.js']
    });
});

app.get("/programming", (req, res) => {
    res.render("missing", {
        stylesheets: ["/css/styles.css", "css/missing.css"]
    });
});

app.get("/ce", (req, res) => {
    res.render("missing", {
        stylesheets: ["/css/styles.css", "css/missing.css"]
    });
});

app.get("/mathematics", (req, res) => {
    res.render("missing", {
        stylesheets: ["/css/styles.css", "css/missing.css"]
    });
});

app.get("/cv", (req, res) => {
    res.render("cv", {
        stylesheets: ["/css/cv.css"],
        scripts: ['/scripts/cv.js']
    });
})

app.get("/misc", (req, res) => {
    res.render("missing", {
        stylesheets: ["/css/styles.css", "css/missing.css"]
    });
})



// ------------------ POST REQUESTS ----------------------



let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function() {
    console.log("Server has started successfully.");
});