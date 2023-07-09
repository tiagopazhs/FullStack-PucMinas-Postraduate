const greet = (name)  => {

    // if (name.length === '') {
    //     throw 'Name cannot be empty'
    // }

    if (name === undefined) {
        throw 'Name cannot be undefined'
    }

    return `Hello ${name}, this is Brazil`
    
}

module.exports = greet