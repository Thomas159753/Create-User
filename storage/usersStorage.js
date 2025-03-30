class UsersStorage {
    constructor() {
        this.storage = {
            0: { id: 0,
                firstName: 'John',
                lastName: 'Doe',
                email: "test1@email.com",
                age: 25,
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            1: { id: 1,
                firstName: 'Jane',
                lastName: 'Doe',
                email: "test2@email.com",
                age: 30,
                bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            },
        this.id = 2;
    }

    addUser({firstName, lastName, email, age, bio}) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email, age, bio };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, {firstName, lastName, email, age, bio}) {
        this.storage[id] = {id, firstName, lastName, email, age, bio}
    }

    deleteUser(id){
        delete this.storage[id];
    }
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();