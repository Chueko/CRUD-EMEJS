module.exports=function(){
    var db=require('../libs/db-connections')();
    var mongoose=require('mongoose');
    var Schema=mongoose.Schema;
    var Task=Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return mongoose.model('tasks',Task);
}
