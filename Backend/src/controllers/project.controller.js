const ProjectModel = require('../models/project.model');

module.exports.createProjectController = async (req, res) => {

    const {name} = req.body;
    if (!name || !name?.trim()) {
        return res.status(400).json({ message: 'Project name is required' });
    }

    const project = await ProjectModel.create({ name });
    return res.status(201).json({
        message: 'Project created successfully',
        project
    });

}

module.exports.listProjectsController = async (req, res) => {
    const projects = await ProjectModel.find();
    return res.status(200).json({ 
        projects 
    });
}