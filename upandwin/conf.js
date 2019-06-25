/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 3005;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const myRouter = express.Router();

// configuration Mongodb
const options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
};
const urlmongo = 'mongodb+srv://projet3:DUvCXkR3nkGnitF3@upandwin-fx8ww.mongodb.net/upandwin';
mongoose.connect(urlmongo, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function () {
  console.log('Connexion à la base OK');
});


// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Schema collection quizzs
const quizzesSchema = mongoose.Schema({
  titre: String,
  qa: Array,
  score: Number,
  video_id: mongoose.Schema.Types.ObjectId,
});
const Quizzes = mongoose.model('Quizzes', quizzesSchema);
// Route /
myRouter.route('/')
  .all(function (req, res) {
    res.json({ message: "Bienvenue sur l'API upandwin ", methode: req.method });
  });

// Route collection Quizzs
myRouter.route('/quizzes')
  .get(function (req, res) {
    Quizzes.find(function (err, quizzes) {
      if (err) {
        res.send(err);
      }
      res.json(quizzes);
    });
  });

myRouter.route('/quizzes/:quizz_id')
  .get(function (req, res) {
    Quizzes.find({ _id: req.params.quizz_id }, function (err, quizzes) {
      if (err) {
        res.send(err);
      }
      res.json(quizzes);
    });
  });


// Schema collection quizzs
const quizzSchema = mongoose.Schema({
  titre: String,
  question: Array,
  score: Number,
  video_id: mongoose.Schema.Types.ObjectId,
});
const Quizz = mongoose.model('Quizz', quizzSchema);
// Route /
myRouter.route('/')
  .all(function (req, res) {
    res.json({ message: "Bienvenue sur l'API upandwin ", methode: req.method });
  });

// Route collection Quizzs
myRouter.route('/quizzs')
  .get(function (req, res) {
    Quizz.find(function (err, quizzs) {
      if (err) {
        res.send(err);
      }
      res.json(quizzs);
    });
  })

  .post(function (req, res) {
    const quizzs = new Quizz();
    quizzs.titre = req.body.titre;
    quizzs.question = [req.body.question];
    quizzs.score = req.body.score;
    quizzs.video_id = req.body.video_id;
    quizzs.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'le quizz est maintenant stockée en base de données' });
    });
  });

// route quizzs avec fonction delete
myRouter.route('/quizzs/:quizz_id')

  .get(function (req, res) {
    Quizz.find({ _id: req.params.quizz_id }, function (err, quizzs) {
      if (err) {
        res.send(err);
      }
      res.json(quizzs);
    });
  })
  .delete(function (req, res) {
    Quizz.remove({ _id: req.params.quizz_id }, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bravo, quizz supprimée' });
    });
  });

// Schema collection video
const videoSchema = mongoose.Schema({
  titre: String,
  auteur: String,
  date: Date,
  lien: String,
  duree: String,
  nbVue: Number,
  notes: Array,
  jeu: String,
  difficulte: String,
  categorie: String,
  commentaires: Array,
  objectifs: Array,
});

const Video = mongoose.model('Video', videoSchema);

myRouter.route('/videos')
  .get(function (req, res) {
    Video.find(function (err, videos) {
      if (err) {
        res.send(err);
      }
      res.json(videos);
    });
  })

  .post(function (req, res) {
    const videos = new Video();
    videos.titre = req.body.titre;
    videos.auteur = req.body.auteur;
    videos.date = req.body.date;
    videos.lien = req.body.lien;
    videos.duree = req.body.duree;
    videos.nbVue = req.body.nbVue;
    videos.notes = [req.body.notes];
    videos.jeu = req.body.jeu;
    videos.difficulte = req.body.difficulte;
    videos.commentaires = [req.body.commentaires];
    videos.objectifs = [req.body.objectifs];
    videos.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bravo, la video est maintenant stockée en base de données' });
    });
  });

myRouter.route('/videos/:jeu')
  .get(function (req, res) {
    Video.find({ jeu: req.params.jeu }, function (err, videos) {
      if (err) {
        res.send(err);
      }
      res.json(videos);
    });
  });

myRouter.route('/videosid/:video_id')
  .get(function (req, res) {
    Video.find({ _id: req.params.video_id }, function (err, videos) {
      if (err) {
        res.send(err);
      }
      res.json(videos);
    });
  })
  .delete(function (req, res) {
    Video.remove({ _id: req.params.video_id }, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bravo, video supprimée' });
    });
  })
  .put(function (req, res) {
    Video.findById(req.params.video_id, function (err, videos) {
      if (err) {
        res.send(err);
      }
      videos.titre = req.body.titre;
      videos.auteur = req.body.auteur;
      videos.date = req.body.date;
      videos.lien = req.body.lien;
      videos.duree = req.body.duree;
      videos.nbVue = req.body.nbVue;
      videos.notes = [req.body.notes];
      videos.jeu = req.body.jeu;
      videos.difficulte = req.body.difficulte;
      videos.commentaires = [req.body.commentaires];
      videos.objectifs = [req.body.objectifs];
      videos.save(function (errs) {
        if (errs) {
          res.send(errs);
        }
        res.json({ message: 'Bravo, mise à jour des données OK' });
      });
    });
  });

// schema collection users
const userSchema = mongoose.Schema({
  email: String,
  firstname: String,
  lastname: String,
  alias: String,
  password: String,
  confpassword: String,
  age: Number,
  registration_date: Date,
  games: Array,
  viewed_videos: Array,
  fav_videos: Array,
  badges: Array,
  quizz_id: Array,
  quizzAnswers: Array,
  friends: Array,
  wins: Number,
});

const User = mongoose.model('User', userSchema);

myRouter.route('/users')
  .get(function (req, res) {
    User.find(function (err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  })

  .post(function (req, res) {
    const users = new User();
    users.email = req.body.email;
    users.firstname = req.body.firstname;
    users.lastname = req.body.lastname;
    users.alias = req.body.alias;
    users.password = req.body.password;
    users.confpassword = req.body.confpassword;
    users.age = req.body.age;
    users.registration_date = req.body.registration_date;
    users.games = [req.body.games];
    users.score = req.body.score;
    users.viewed_videos = [req.body.viewed_videos];
    users.video_favs = [req.body.video_favs];
    users.badges = [req.body.badges];
    users.quizz_id = [req.body.quizz_id];
    users.quizzAnswers = [];
    users.friends = [req.body.friends];
    users.wins = req.body.wins;
    users.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bravo, la video est maintenant stockée en base de données' });
    });
  });

myRouter.route('/users/:alias')
  .get(function (req, res) {
    User.find({ alias: req.params.alias }, function (err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  });

myRouter.route('/usersubmitquizz/:user_id')
  .put(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      if (err) {
        res.send(err);
      }
      user.quizzAnswers.push(req.body.quizzAnswer);
      user.quizz_id.push(req.body.quizz_id);
      user.save(function (error) {
        if (error) {
          res.send(error);
        } else {
          res.json({ status: 'ok', MODIF: req.body });
        }
      });
    });
  });

/* myRouter.route('/usersubmitquizz/:userId')
  .put(function (req, res) {
    User.findByIdAndUpdate(req.params.userId, User.quizzAnswers.push(req.body.quizzAnswers), function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json({ status: 'ok', MODIF: req.body });
    });
  }); */

app.use(myRouter);
app.listen(port, hostname, function () {
  console.log('Mon serveur fonctionne');
});
