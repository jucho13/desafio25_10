export const generateProductErrorInfo = (user) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
        Lista de propiedades requeridas:
            -> title: type String, recibido: ${product.title}
            -> price: type Number, recibido: ${product.price}
            -> description: type String, recibido: ${product.description}
            -> thumbnail: type Array, recibido: ${product.thumbnail}
            -> id: type Array, recibido ${product.id}
            -> code: type String, debe ser unico, recibido: ${product.code}
            -> stock: type Number, recibido: ${product.stock}
            -> status: type Boolean, recibido: ${product.status}
    `;
};