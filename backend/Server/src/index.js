const express = require('express');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const { handleErrors } = require('./middleware/errorMiddleware');
const { useRoutes } = require('react-router-dom');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());
// Routes
app.use(recipeRoutes);
app.use(userRoutes);
app.use(authRoutes);


// Error handling middleware
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
