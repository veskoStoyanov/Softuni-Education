const Team = require('../models/Team');
const User = require('../models/User');

module.exports = {
    getCreateTeam: (req, res) => {
        res.render('teams/create')
    },
    postCreateTeam: async (req, res) => {
        try {
            let data = req.body;
            await Team.create({
                name: data.name,
            })
            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
    getTeams: async (req, res) => {
        try {
            let users = await User.find();
            let teams = await Team.find();
            let userTeam = await Team.find()
                .populate('members')
                .populate('projects')
            res.render('teams/team', { users, teams, userTeam })
        } catch (e) {
            console.log(e);

        }
    },
    postTeams: async (req, res) => {
        try {
            let users = await User.find();
            let teams = await Team.find();
            let team = await Team.findById(req.body.team);
            let user = await User.findById(req.body.userId);
            for (const id of team.members) {
                if (id.toString() === req.body.userId.toString()) {

                    res.locals.globalError = 'user is in the team already!';
                    res.render('teams/team', { users, teams });
                    return;
                }
            }
            team.members.push(req.body.userId);
            await team.save();
            user.teams.push(team._id);
            await user.save();
            res.redirect('/');


        } catch (e) {
            console.log(e);

        }
    },
    leave: async (req, res) => {
        try {
            let user = req.user;
            let team = await Team.findById(req.query.team);

            let indexUser = user.teams.indexOf(team._id);
            user.teams.splice(indexUser, 1)
            await user.save();

            let indexteam = team.members.indexOf(user._id);
            team.members.splice(indexteam, 1)
            await team.save();

            res.redirect('back');
        } catch (e) {
            console.log(e);

        }

    },
    search: async (req, res) => {
        try {
            let text = req.query.text;
            let userTeam = await Team.find()
            .populate('projects')
            userTeam = userTeam.filter(x => {
                return x.name.toLowerCase().includes(text.toLowerCase());
            });

            res.render('teams/team', {userTeam})
        } catch (e) {
            console.log(e);

        }
    },

}