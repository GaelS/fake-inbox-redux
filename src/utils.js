import faker from 'faker';

const generateMail = () => ({
    read: false,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    object: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    timeStamp: Date.now(),
});

export default generateMail;

