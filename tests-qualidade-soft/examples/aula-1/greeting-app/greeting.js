const greet = (name)  => {

    if (name === undefined) {
        throw 'Name cannot be undefined'
    }

    if (name.length === 0) {
        throw 'Name cannot be empty'
    }

    return `Hello ${name}, this is Brazil`
    
}

module.exports = greet