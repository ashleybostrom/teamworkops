class Employee {
    constructor(name, id, email, role = "Employee") {
        if (!id || !name || !email) {
            throw new Error("You are missing a required parameter");
    }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.title;
    }
}

module.exports = Employee;