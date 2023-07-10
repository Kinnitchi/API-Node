const express = require('express');
const app = express();
const port = 3000;

app.get('/TESTE', (req, res) => {
   const result = {
      name: 'John Doe',
      age: 22,
   };
   res.send(result);
});
app.post('/', (req, res) => res.send('POST API'));
app.put('/', (req, res) => res.send('PUT API'));
app.delete('/', (req, res) => res.send('DELETE API'));
app.listen(port, () => console.log(`Listening on port ${port}!`));