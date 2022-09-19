//dependencies imported
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//dependencies routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}.`);
});