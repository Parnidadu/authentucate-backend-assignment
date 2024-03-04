// searchRoutes.ts

import express from 'express';
import {searchController} from '../controllers/search-controller';

const router = express.Router();

router.get('/search/:query', searchController);
export default router;
