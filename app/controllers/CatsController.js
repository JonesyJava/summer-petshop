import CatsService from "../services/CatsService"
import express from 'express'

//import service and create an instance
let _service = new CatsService()
let _repo = _service.repository

//PUBLIC
export default class CatsController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAllCats)
            .get('/:id', this.getCatById)
            .post('', this.createCat)
            .put('/:id', this.editCat)
            .delete('/:id', this.deleteCat)
            .use('*', this.defaultRoute)
    }

    defaultRoute(req, res, next) {
        next({ status: 404, message: 'no such CatRoute' })
    }

    async getAllCats(req, res, next) {
        try {
            let cats = await _repo.find({})
            return res.send(cats)
        }
        catch (err) { next(err) } //sends error to default error handler (main.js)
    }

    getCatById(req, res, next) {

    }

    createCat(req, res, next) {

    }

    editCat(req, res, next) {

    }

    deleteCat(req, res, next) {

    }
}