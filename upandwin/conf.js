/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */


const express = require('express');

const app = express();
const multer = require('multer');

const upload = multer({ dest: 'tmp/' });
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3005;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();


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
  title: String,
  qa: Array,
  score: Number,
  video_id: mongoose.Schema.Types.ObjectId,
});
const Quizze = mongoose.model('Quizzes', quizzesSchema);
// Route /

myRouter.route('/save-quiz')
  .post(function (req, res) {
    const quizzes = new Quizze();
    quizzes.title = req.body.title;
    quizzes.score = req.body.score;
    quizzes.qa = req.body.qa;
    quizzes.video_id = req.body.video_id;

    quizzes.save(function (err, doc) {
      if (err) {
        res.send(err);
      }
      res.json(doc._id);
    });
  });

myRouter.route('/')
  .all(function (req, res) {
    res.json({ message: "Bienvenue sur l'API upandwin ", methode: req.method });
  });

// Route collection Quizzs
myRouter.route('/quizzes')
  .get(function (req, res) {
    Quizze.find(function (err, quizzes) {
      if (err) {
        res.send(err);
      }
      res.json(quizzes);
    });
  });

myRouter.route('/quizzes/:quizz_id')
  .get(function (req, res) {
    Quizze.find({ _id: req.params.quizz_id }, function (err, quizzes) {
      if (err) {
        res.send(err);
      }
      res.json(quizzes);
    });
  });


// Schema collection quizzs
// Route /
myRouter.route('/')
  .all(function (req, res) {
    res.json({ message: "Bienvenue sur l'API upandwin ", methode: req.method });
  });

// Route collection Quizzs
myRouter.route('/quizzs')
  .get(function (req, res) {
    Quizze.find(function (err, quizzes) {
      if (err) {
        res.send(err);
      }
      res.json(quizzes);
    });
  });


// route quizzs avec fonction delete
myRouter.route('/quizzs/:quizz_id')

  .get(function (req, res) {
    Quizze.find({ _id: req.params.quizz_id }, function (err, quizzs) {
      if (err) {
        res.send(err);
      }
      res.json(quizzs);
    });
  })
  .delete(function (req, res) {
    Quizze.remove({ _id: req.params.quizz_id }, function (err) {
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
  nbVues: Number,
  notes: [Number],
  jeu: String,
  difficulte: String,
  categorie: String,
  commentaires: Array,
  objectifs: Array,
  lane: Array,
  quizz_id: mongoose.Schema.Types.ObjectId,
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
    videos.nbVues = 0;
    videos.notes = [];
    videos.jeu = req.body.jeu;
    videos.quizz_id = req.body.quizz_id;
    videos.difficulte = req.body.difficulte;
    videos.commentaires = [];
    videos.objectifs = [req.body.objectifs];
    videos.lane = [req.body.lane];
    videos.save(function (err, doc) {
      if (err) {
        res.send(err);
      }
      res.json(doc.id);
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
    Video.find({ _id: req.params.videos_id }, function (err, videos) {
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
      videos.nbVues = req.body.nbVues;
      videos.notes = [];
      videos.jeu = req.body.jeu;
      videos.difficulte = req.body.difficulte;
      videos.commentaires = [];
      videos.objectifs = [req.body.objectifs];
      videos.save(function (errs) {
        if (errs) {
          res.send(errs);
        }
        res.json({ message: 'Bravo, mise à jour des données OK' });
      });
    });
  });

myRouter.route('/videosnotes/:video_id')
  .get(function (req, res) {
    Video.find({ _id: req.params.video_id }, function (err, videos) {
      if (err) {
        res.send(err);
      }
      res.json(videos[0].notes);
    });
  })
  .put(function (req, res) {
    Video.findById(req.params.video_id, function (err, video) {
      if (err) {
        res.send(err);
      }
      video.notes.push(req.body.note);
      video.save(function (error) {
        if (error) {
          res.send(error);
        } else {
          res.json({ status: 'ok', finalNotes: video.notes });
        }
      });
    });
  });

myRouter.route('/addQuizzId/:videoId')
  .put(function (req, res) {
    Video.findById(req.params.videoId, function (err, video) {
      if (err) {
        res.send(err);
      }
      video.quizz_id = req.body.quizz_id;
      video.save(function (error) {
        if (error) {
          res.send(error);
        } else {
          res.json({ status: 'ok', MODIF: req.body });
        }
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
  avatar: String,
  age: Number,
  registration_date: Date,
  games: Array,
  viewed_videos: [mongoose.Schema.Types.ObjectId],
  fav_videos: Array,
  badges: Array,
  quizz_idTodo: [mongoose.Schema.Types.ObjectId],
  quizz_id: [mongoose.Schema.Types.ObjectId],
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
    users.avatar = req.body.avatar;
    users.age = req.body.age;
    users.registration_date = req.body.registration_date;
    users.games = [req.body.games];
    users.score = req.body.score;
    users.viewed_videos = [req.body.viewed_videos];
    users.video_favs = [req.body.video_favs];
    users.badges = [req.body.badges];
    users.quizz_idTodo = [req.body.quizz_idTodo];
    users.quizz_id = [req.body.quizz_id];
    users.quizzAnswers = [];
    users.friends = [req.body.friends];
    users.wins = req.body.wins;
    users.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Bravo, l'utilisateur est maintenant stockée en base de données" });
    });
  })

  .put(function (req, res) {
    User.find(function (err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users);
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

myRouter.route('/nbvues/:videosId')
  .get(function (req, res) {
    Video.find({ _id: req.params.videosId }, function (err, videos) {
      if (err) {
        res.send(err);
      }
      res.json(videos[0].nbVues);
    });
  })

  .put(function (req, res) {
    Video.find({ _id: req.params.videosId }, function (err, video) {
      if (err) {
        res.send(err);
      }
      video[0].nbVues += 1;
      video[0].save(function (error) {
        if (error) {
          res.send(error);
        } else {
          res.json({ status: 'ok', Vues: video[0].nbVues });
        }
      });
    });
  });

myRouter.route('/usersquizztodo/:id')
  .get(function (req, res) {
    User.find({ _id: req.params.id }, function (err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users[0].quizz_idTodo);
    });
  });

myRouter.route('/user/:userId')
  .put(function (req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json({ status: 'ok', updatedUser: user });
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
      user.quizz_idTodo = req.body.quizz_idTodo;
      user.save(function (error) {
        if (error) {
          res.send(error);
        } else {
          res.json({ status: 'ok', MODIF: req.body });
        }
      });
    });
  });

myRouter.route('/userreceivequizz/:user_id')
  .put(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      if (err) {
        res.send(err);
      }
      user.quizz_idTodo.push(req.body.quizz_id);
      user.viewed_videos.push(req.body.video_id);
      user.save(function (error) {
        if (error) {
          res.send(error);
        } else {
          res.json({ status: 'ok', MODIF: req.body });
        }
      });
    });
  });

myRouter.route('/')
  .get(function (req, res) {
    res.sendFile(path.join(`${__dirname}/Profil.jsx`));
  });

myRouter.route('/sendFile')
  .put(function (req, res) {
    upload.single('myFile');
    fs.rename(req.file.path, `public/images/${req.file.originalname}`,
      function (err) {
        if (err) {
          res.send("Problème durant l'upload du fichier");
        } else {
          res.send('Fichier uploadé avec succès');
        }
      });
  });

app.use(myRouter);
app.listen(port, hostname, function () {
  console.log('Mon serveur fonctionne');
});
