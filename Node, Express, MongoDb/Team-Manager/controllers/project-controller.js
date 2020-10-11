const Project = require('../models/Project');
const Team = require('../models/Team');
const User = require('../models/User');

module.exports = {
    getCreateProject: (req, res) => {
        res.render('projects/create');
    },
    postCreateProject: async (req, res) => {
        try {
            let data = req.body;
            await Project.create({
                name: data.name,
                description: data.description,

            })
            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
    getProjects: async (req, res) => {
        try {
            let teams = await Team.find();

            let userProjects = await Project.find()
                .populate('team');


            let projectsAdmin = await Project.find();

            projectsAdmin = projectsAdmin.filter(x => {
                return x.team === null
            });



            res.render('projects/project', { teams, userProjects , projectsAdmin});
        } catch (e) {
            console.log(e);

        }
    },
    postProjects: async (req, res) => {
        try {

            let team = await Team.findById(req.body.teamId);
            let project = await Project.findById(req.body.projectId);

            project.team = team._id;
            await project.save();

            team.projects.push(project._id);
            await team.save();

            res.redirect('/')



        } catch (e) {
            console.log(e);

        }
    },
    search:async (req, res) => {
        try{
            let text = req.query.text;
            let userProjects = await Project.find()
            .populate('team');

            userProjects = userProjects.filter( x => {
                return x.name.toLowerCase().includes(text.toLowerCase())
            });

            res.render('projects/project', {userProjects})
        }catch(e) {
            console.log(e);
            
        }
    }

}