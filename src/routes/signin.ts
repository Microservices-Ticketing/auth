import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi there current user! signed in')
});

export { router as signinRouter };