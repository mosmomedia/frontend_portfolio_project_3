import express from 'express';
import connetDB from './config/db.js';
connetDB();

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
//* Class
import classRoutes from './Routes/classRoutes.js';
app.use('/api/class', classRoutes);

//* Book
import bookRoutes from './Routes/bookRoutes.js';
app.use('/api/book', bookRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
