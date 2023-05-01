import { Entity, Schema } from "redis-om";
import client from "./client.js";

// entitas
class Person extends Entity {}

// skema
const personSchema = new Schema(Person, {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    age: { type: 'number' },
    verified: { type: 'boolean' },
    location: { type: 'point' },
    locationUpdated: { type: 'date' },
    skills: { type: 'string[]' },
    personalStatement: { type: 'text' }
})

const personRepository = client.fetchRepository(personSchema)

await personRepository.createIndex()

export { personRepository }


