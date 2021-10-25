const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const persons = [
  {
    name: 'Noushad',
    interest: 'code refactoring efficiently'
  },

  {
    name: 'Aniket',
    interest: 'making react apps'
  },
];

app.get('/api', (req, res) => {
  res.json({ object: `Server is running and you made a GET requested on '/api' path` });
});

app.get('/getpersons', (req, res) => {
  res.json(persons);
});

app.get('*', (req, res) => {
  res.send(`server said 404 not found for this route`);
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
