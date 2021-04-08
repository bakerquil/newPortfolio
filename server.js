const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, './public');
const PORT =  process.env.PORT || 3000;
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
 
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}`);
})
