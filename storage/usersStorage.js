class UsersStorage {
    constructor() {
        this.storage = {
            0: { id: 0, firstName: 'John', lastName: 'Doe' },
            1: { id: 1, firstName: 'Jane', lastName: 'Doe' },
        },
        this.id = 2;
    }

    addUser({firstName, lastName}) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, {firstName, lastName}) {
        this.storage[id] = {id, firstName, lastName}
    }

    deleteUser(id){
        delete this.storage[id];
    }
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();