const employee = require("./employee");
const manager = require("./employee")

class manager extends employee {
    constructor (name, id, email, phone) {
        super(name, id, email);
        this.phone = phone; 
    }

    getPhone() {
        return this.phone
    }

    getRole() {
        return this.role 
    };

}

module.exports = manager