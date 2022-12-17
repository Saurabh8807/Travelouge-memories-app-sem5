import express from 'express';

import { getPostsBySearch, getPosts, createPost, updatePost, likePost, deletePost,getPostsByName } from '../controllers/posts.js';

const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/search10', getPostsBySearch);
router.get('/search', getPostsByName);
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;