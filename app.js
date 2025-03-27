const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');

const PORT = process.env.PORT || 3005;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', usersRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}. http://localhost:${PORT}`));