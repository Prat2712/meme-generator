const mongoose = require('mongoose');

const db_name = "prat27"
const url = `mongodb+srv://prat1s:prat1s@cluster0.zmxol.mongodb.net/${db_name}?retryWrites=true&w=majority`

mongoose.connect(url)
.then((result) => {
    console.log("database connected")
}).catch((err) => {
    console.error(err)
});

module.exports = mongoose;
