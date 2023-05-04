import {personSchema as schema} from "../model/person.js"
import redisClient from "../infrastructure/redis_client.js"


const repo = redisClient.fetchRepository(schema);
export class personRepository {
    
    async getAllPerson() {
        var data = await repo.search().return.all();
        return data;
    }

    async createNew(data) {
        var person = await repo.createAndSave(data);
        return person;
    }

    async delete(id) {
        await repo.remove(id)
    }
}


