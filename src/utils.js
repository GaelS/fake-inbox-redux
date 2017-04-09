import faker from 'faker';

const generateMail = () => ({
    read: false,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.cats(),
    object: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    timeStamp: Date.now(),
});

export default (number) => [...Array(number).keys()].map(generateMail);

