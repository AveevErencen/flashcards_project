import express from 'express';
import { User } from '../../db/models';

const indexApi = express.Router();

indexApi.post('/user', async (req, res) => {
  const user = await User.create(req.body);
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    const error = new URLSearchParams();
    error.append('error', err.message);
    res.status(500).json(err.message);
  }
});
