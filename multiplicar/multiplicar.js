// Requireds 
const fs = require('fs');

let listarTabla = (base, limite) => {
    let tabla = '';

    for (let i = 1; i <= limite; i++) {
        tabla += `${base} X ${i} = ${base * i}\n`;
    }

    console.log(tabla);
}

// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor intoducido no es valido.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-limite-${limite}.txt`);
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}