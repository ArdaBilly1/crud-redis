import {personSchema as schema} from "../model/person.js"
import redisClient from "../infrastructure/database/redis_client.js"

export class personRepository {
    constructor() {
        this.repo = redisClient.fetchRepository(schema);
    }
    
    async getAllPerson() {
        var data = await this.repo.search().return.all();
        return data;
    }

    async createNew(data) {
        var person = await this.repo.createAndSave(data);
        return person;
    }

    async delete(id) {
        await this.repo.remove(id)
    }
}


