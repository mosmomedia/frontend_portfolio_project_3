import express from 'express';
import connetDB from './config/db.js';
connetDB();

const app = express();

// Routes
import classRoutes from './Routes/classRoutes.js';
app.use('/api/class', classRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
