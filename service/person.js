import { personRepository as repo } from "../repository/person.js";
import { responseGenerator } from "./response-gen.js";

const repository = new repo()
const setResponse = new responseGenerator()

export class personService {
    async getAllPerson(req, res) {
        var data = await repository.getAllPerson()
    
        setResponse.generateResponseOk(data, res)
    }

    async createNew(req, res) {
        var process = await repository.createNew(req.body)

        setResponse.generateResponseOk(process, res)
    }
    
}