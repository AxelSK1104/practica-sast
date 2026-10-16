const express = require('express');
const app = express();

app.get('/redirect', (req, res) => {
  const urlDestino = req.query.target;
  
  // Vulnerabilidad de Redirección Abierta / No Confiable (Medium)
  res.redirect(urlDestino);
});

app.listen(3000);