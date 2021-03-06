import express from 'express';
import connetDB from './config/db.js';
connetDB();

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

//* Tutor
import tutorRoutes from './Routes/tutorRoutes.js';
app.use('/api/tutor', tutorRoutes);

//* Student
import studentRoutes from './Routes/studentRoutes.js';
app.use('/api/student', studentRoutes);

//* Class
import classRoutes from './Routes/classRoutes.js';
app.use('/api/class', classRoutes);

//* Book
import bookRoutes from './Routes/bookRoutes.js';
app.use('/api/book', bookRoutes);

//* Order
import orderRoutes from './Routes/orderRoutes.js';
app.use('/api/order', orderRoutes);

//* Works
import worksRoutes from './Routes/workRoutes.js';
app.use('/api/work', worksRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
