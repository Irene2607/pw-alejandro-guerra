import {Router} from "express"
import { sign } from "jsonwebtoken"
const router = Router()

import * as authCtrl from '../controllers/auth.controller'


router.post('/signup', authCtrl.signup)
router.post('/signin', authCtrl.signin)

export default router;