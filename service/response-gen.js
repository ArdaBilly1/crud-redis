export class responseGenerator {
    generateResponseOk(data, res) {
        const response = {
            "status" : "ok",
            "message" : "succes",
            "data" : data
        }

        res.send(response)
    }
}