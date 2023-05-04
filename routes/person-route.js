import { Router } from "express";
import { personRepository } from "../om/person.js";
import {personRepository as repo} from "../repository/person.js"
import { personService } from "../service/person.js";

const router = Router()
const personSvc = new personService()

router.post('/', personSvc.createNew)
router.get('/all', personSvc.getAllPerson)

router.get('/:id', async(req, res) => {
    const person = await personRepository.fetch(req.params.id)
    res.send(person)
})

router.put('/:id', async(req, res) => {
    const person = await personRepository.fetch(req.params.id)

    person.firstName = req.body.firstName ?? null
    person.lastName = req.body.lastName ?? null
    person.age = req.body.age ?? null
    person.verified = req.body.verified ?? null
    person.location = req.body.location ?? null
    person.locationUpdated = req.body.locationUpdated ?? null
    person.skills = req.body.skills ?? null
    person.personalStatement = req.body.personalStatement ?? null

    await personRepository.save(person)

    res.send(person)
})

router.delete('/:id', async(req,res) => {
    await personRepository.remove(req.params.id)
    res.send({ entityId : req.params.id })
})

router.get("/get-by-last/:lastName", async(req, res) => {
    const data = await personRepository.
                search().
                where("lastName").
                equal(req.params.lastName).
                return.all()
    
    res.send(data)
})

export {router}