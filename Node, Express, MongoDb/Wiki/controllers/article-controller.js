const User = require('../models/User');
const Edit = require('../models/Edit');
const Article = require('../models/Article');

module.exports = {
    createArticleGet: (req, res) => {
        res.render('articles/create')
    },
    createArticlePost: async (req, res) => {
        try {
            let data = req.body;
            let article = await Article.create({
                title: data.title,
                content: data.content,
            })

            let edit = await Edit.create({
                title: data.title,
                content: data.content,
                article: article._id,
                author: req.user._id
            })

            req.user.edits.push(edit._id);
            await req.user.save();

            article.edits.push(edit._id);
            await article.save();

            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
    listAll: async (req, res) => {
        try {
            const articles = await Article.find()
                .sort('title')

            res.render('articles/list-all', { articles });
        } catch (e) {
            console.log(e);

        }
    },
    articlesDetails: async (req, res) => {
        try {
            let article = await Article.findById(req.params.id)
                .populate('edits')


            const latestEdit = article.edits.sort((a, b) => {
                return b.toString().localeCompare(a.toString())
            })[0];


            res.render('articles/details', { latestEdit, id: article._id, isLocked: article.isLocked });
        } catch (e) {
            console.log(e);

        }

    },
    getArticleEdit: async (req, res) => {
        try {
            let article = await Article.findById(req.params.id);
            res.render('articles/edit', article);
        } catch (e) {
            console.log(e);
        }
    },
    postArticleEdit: async (req, res) => {
        try {
            let article = await Article.findById(req.params.id);

            let edit = await Edit.create({
                content: req.body.content,
                article: req.params.id,
                author: req.user._id,
            });

            req.user.edits.push(edit._id);
            await req.user.save();

            article.edits.push(edit._id);
            await article.save();

            res.redirect('/')
        } catch (e) {
            console.log(e);

        }
    },
    history: async (req, res) => {
        try {
            let edits = await Edit.find({
                article: req.params.id
            })
                .populate('author')
                .populate('article')
            let article = Article.findById(req.params.id);
            res.render('articles/history', { edits, title: article.title });
        } catch (e) {
            console.log(e);
        }
    },
    lock: async (req, res) => {
      let article = await Article.findById(req.params.id);
        article.isLocked = true;

       await article.save();
       res.redirect(`/article/details/${req.params.id}`)
    },
    unlock: async (req, res) => {
        let article = await Article.findById(req.params.id);
        article.isLocked = false;

        await article.save();
        res.redirect(`/article/details/${req.params.id}`)
    }
}