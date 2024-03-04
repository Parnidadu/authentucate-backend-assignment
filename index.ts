// index.ts
import express from 'express';
import userRoutes from './src/routes/user-routes';
import contactsRoutes from './src/routes/contacts-routes';
import searchRoutes from './src/routes/search-routes'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', searchRoutes);
app.use('/api', userRoutes);
app.use('/api', contactsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
