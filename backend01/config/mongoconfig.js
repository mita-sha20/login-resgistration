const mongoose = require('mongoose');


let mongoconfig=()=>{
    mongoose.connect('mongodb+srv://figmauser:J$z5njKez7!J-h5@cluster0.3u2lkfh.mongodb.net/figma?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Database Connected!'));
}


module.exports=mongoconfig;