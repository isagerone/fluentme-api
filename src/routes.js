const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => {
  res.send('FluentME API 🚀');
});

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Aulas (mock)
router.get('/lessons', (req, res) => {
  res.json([
    { id: 1, title: "Introdução ao Coreano", level: "iniciante" },
    { id: 2, title: "Gramática (으)려고", level: "intermediário" }
  ]);
});

// Simulação IA
router.post('/chat', (req, res) => {
  const { message } = req.body;
  res.json({
    reply: `IA FluentME: resposta para "${message}"`
  });
});

module.exports = router;