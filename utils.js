import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { faker } from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





export const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        thumbnail: faker.image.urlLoremFlickr(),
        id: faker.database.mongodbObjectId(),
        code: faker.string.alphanumeric({ length: { min: 5, max: 10 } }),
        stock: faker.number.int({ min: 10, max: 1000 }), 
        status:faker.datatype.boolean(0.9)
    }
};

export default __dirname;