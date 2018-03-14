class Repository {
    constructor(props) {
        this.props = props
        this.data = new Map()
        this._id = 0
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get(id) {
        if(!this.data.has(id))
            throw new Error(`Entity with id: ${id} does not exist!`)
        return this.data.get(id)
    }

    add(entity) {
        this.validate(entity)
        this.data.set(this.id, entity)
        return this.id++
    }

    update(id, entity) {
        if(!this.data.has(id))
            throw new Error(`Entity with id: ${id} does not exist!`)
        this.validate(entity)
        this.data.set(id, entity)
    }

    del(id) {
        if(!this.data.has(id))
            throw new Error(`Entity with id: ${id} does not exist!`)
        this.data.delete(id)
    }

    get count() {
        return this.data.size
    }

    validate(entity) {
        Object.keys(this.props).forEach(key => {
            if(!entity.hasOwnProperty(key))
                throw new Error(`Property ${key} is missing from the entity!`)
            if(typeof entity[key] !== this.props[key])
                throw new Error(`Property ${key} is of incorrect type!`)
        })
    }
}

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
console.log(repository.count);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
console.log(repository.count); // Returns 1
let anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: new Date(1998, 0, 7)
};
repository.add(anotherEntity); // should throw a TypeError
console.log(repository.count);
