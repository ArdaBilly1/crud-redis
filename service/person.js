import { personRepository } from "../om/person.js";
import { personRepository as repo } from "../repository/person.js";
import { responseGenerator } from "./response-gen.js";

const setResponse = new responseGenerator()

export class personService {
    constructor() {
        this.repository = new repo()
    }

    async getAllPerson(req, res) {
        var data = await this.repository.getAllPerson()
    
        setResponse.generateResponseOk(data, res)
    }

    async createNew(req, res) {
        var process = await this.repository.createNew(req.body)

        setResponse.generateResponseOk(process, res)
    }
    
    async delete(req, res) {
        await personRepository.remove(req.params.id)
        setResponse.generateResponseOk({entityId:req.params.id}, res)
    }
    
    async getDetail(req, res) {
        var person = await personRepository.fetch(req.params.id)

        setResponse.generateResponseOk(person, res)
    }

    async getByLast(req, res) {
        var data = await personRepository.
                search().
        where("lastName").
        equal(req.params.lastName).
        return.all()

        setResponse.generateResponseOk(data, res)
    }

}