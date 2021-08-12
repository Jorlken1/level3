const express = require('express')
const goodsRouter = require('./goods')
const userRouter = require('./user')
const uploadRouter = require('./upload')


const router = express.Router()

module.exports = router

// 添加请求体格式化中间件，让后面所有接口都实现参数格式化
router.use(
    express.urlencoded({extended:true}),
    express.json(),
    express.text(),
)

// /api/good
router.use('/goods',goodsRouter)

// /api/user
router.use('/user',userRouter)

// /api/order

// 上传
router.use('/upload',uploadRouter)