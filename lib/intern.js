const employee = require("./employee");
const intern = require("./employee")

class intern extends employee {
    constructor (name, id, email) {
        super(name, id, email);
    }

    getRole() {
        return this.role 
    };
}

module.exports = intern