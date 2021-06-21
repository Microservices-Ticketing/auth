import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  res.send('Hi there current user! signed up!!')
});

export { router as signupRouter };