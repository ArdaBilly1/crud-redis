import { Router } from "express";
import { personRepository } from "../om/person.js";
import { personService } from "../service/person.js";

const router = Router()
const personSvc = new personService()

router.post('/', personSvc.createNew)
router.get('/all', personSvc.getAllPerson)
router.delete('/:id', personSvc.delete)
router.get("/get-by-last/:lastName", personSvc.getByLast)

router.get('/:id/detail', async(req, res) => {
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

export {router}