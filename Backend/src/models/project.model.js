const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true,
        default: '',
    },
   
});
const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = ProjectModel;