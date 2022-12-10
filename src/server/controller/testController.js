import db from '../db/db.json' assert { type: "json" };

class dbController {
    async getFirst(req, res) {
        res.send(db[1])
    }
}

export default new dbController()


