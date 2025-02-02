import express from 'express'

import {postComment,getComment, deleteComment, editComment} from '../controllers/comments.js'
import auth from '../Middleware/auth.js'
const routes = express.Router()

routes.post('/post',auth,postComment)
routes.get('/get',getComment)
routes.delete('/delete/:id',auth,deleteComment)
routes.patch('/edit/:id',auth,editComment)

export default routes