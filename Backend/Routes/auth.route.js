import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('Signup routes are available');
});

router.get('/login', (req, res) => {
  res.send('Login routes are available');
});

router.get('/logout', (req, res) => {
  res.send('Logout routes are available');
});  



export default router;