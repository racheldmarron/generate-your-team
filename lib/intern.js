const employee = require("./employee");
const intern = require("./employee")

class intern extends employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school; 
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role 
    };
}

module.exports = intern