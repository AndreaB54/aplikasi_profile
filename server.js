const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.static('public')); // Serving static files
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
