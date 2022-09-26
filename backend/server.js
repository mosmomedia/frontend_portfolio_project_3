import path from 'path';
import { fileURLToPath } from 'url';

import compression from 'compression';

import express from 'express';
import connetDB from './config/db.js';

connetDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// gzip comression
app.use(compression());

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

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
	// Set build folder as static
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	// FIX: below code fixes app crashing on refresh in deployment
	app.get('*', (_, res) => {
		res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.status(200).json({ message: 'Welcome to Storytunes' });
	});
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
