const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({message: 'hello from backend'});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});