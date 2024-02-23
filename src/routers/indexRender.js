import express from 'express';
import { User, Card } from '../../db/models';

const indexRender = express.Router();

indexRender.get('/', async (req, res) => {
  res.render('MainPage', {});
});

indexRender.get('/users/:uid', async (req, res) => {
  const { uid } = req.params;
  if (!Number.isNaN(uid)) {
    const decks = await Deck.findAll();
    res.render('Decks', { userId: uid, decks });
  }
});

indexRender.get('/users/:uid/decks/:did', async (req, res) => {
  const { uid, cid } = req.params;
  const userExists = await User.findByPk(uid);
  if (!Number.isNaN(uid) && userExists && !Number.isNaN(cid)) {
    const cards = await Card.findAll();
    const results = await Round.findAll();
    res.render('Game', { userId: uid, cards, results });
  }
});
