const greet = (name)  => {
    if (name.length === 0) {
        throw Error('Argumento nome não pode ser vazio')
    }

    return `Olá ${name}, seja bem vindo ao curso de Desenvolvimento WEB`
}

module.exports = greet