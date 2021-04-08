const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', {
    title: "Home",
    name: "Baker"
  })
})

app.get('/projects', (req,res) => {
  res.render('projects')

})
app.get('/contact', (req, res ) => {
  res.render('contact')
})
 
app.listen(3000, () => {
    console.log("The app is running on port 3000");
})
