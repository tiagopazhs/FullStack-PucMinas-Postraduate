const fibonacci = (termo) => {
    const term = parseInt(termo);

    let p=0, c=1, i=0, el=0;

    while (i++ < term) {
        el=p+c;
        p=c;
        c=el;
    }

    return p;
};

module.exports = fibonacci;