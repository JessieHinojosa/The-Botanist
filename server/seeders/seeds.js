const faker = require('faker');

const db = require('../config/connection');
const { User, Category, Product } = require('../models');

db.once('open', async () => {

    await User.deleteMany({});


    // create user data
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const shippingAddress = {
            address: faker.address.streetAddress(),
            city: faker.address.cityName(),
            postalCode: faker.address.zipCode(),
            country: faker.address.country()
        };
        const isAdmin = false;

        userData.push(
            {
                firstName,
                lastName,
                shippingAddress,
                isAdmin,
                username,
                email,
                password
            }
        );
    }

    const createdUsers = await User.collection.insertMany(userData);

    // create category data
    await Category.deleteMany({});

    const categories = await Category.insertMany([

        {
            name: 'Foliage',
            description: 'Foliage type indoor plants tend to require less strict caring instuctions and foliage can be just as attrcative as any flowering type.',
            indoor: true,
            outdoor: false
        },
        {
            name: 'Cactus',
            description: 'If you have enough light and warmth you can grow cacti. Many interesting and peculiar features have enabled these to become plants for the hobbyist.',
            indoor: true,
            outdoor: true
        },
        {
            name: 'Succulent',
            description: 'Cacti and succulents that will thrive in low humidity, high sunlight, and light water environments.',
            indoor: true,
            outdoor: true
        },

        {
            name: 'Palm',
            description: 'Indoor palm type plants have many popular varieties including the parlor palm, kentia, sentry, lady, sago and others.',
            indoor: true,
            outdoor: true
        }
    ])

    await Product.deleteMany({});

    // create product
    const products = await Product.insertMany([
        {
            name: 'Bird of Paradise',
            description: 'Foliage plant',
            image: 'bird-of-paradise.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 75.00,
            countInStock: 25,
            isFeatured: false
        },
        {
            name: 'Monstera',
            description: 'Swiss cheese plant',
            image: 'monstera.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 0.99,
            countInStock: 25,
            isFeatured: false
        },
        {
            name: 'Golden Pothos',
            description: 'Indoor trailing plant',
            image: 'golden-pothos.jpg',
            numReviews: 2,
            category: categories[1]._id,
            price: 15.00,
            countInStock: 25,
            isFeatured: true
        },
        {
            name: 'Sansevieria',
            description: 'Snake Plant',
            image: 'sansevieria-2.jpg',
            numReviews: 2,
            category: categories[1],
            price: 13.00,
            countInStock: 25,
            isFeatured: true
        },
        {
            name: 'Rubber Plant',
            description: 'no idea ',
            image: 'rubber-plant.jpg',
            numReviews: 2,
            price: 25.00,
            countInStock: 25,
            category: categories[3]._id,
            isFeatured: true
        },
        {
            name: 'Lemon Eucalyptus',
            description: 'testing eucalyptus',
            image: 'lemon-eucalyptus.jpg',
            numReviews: 2,
            price: 11.50,
            countInStock: 25,
            category: categories[3]._id,
            isFeatured: true
        },
        {
            name: 'Echeveria',
            description: 'succulent',
            image: 'echeveria.jpg',
            numReviews: 2,
            price: 4.99,
            countInStock: 25,
            category: categories[2]._id,
            isFeatured: true
        },
        {
            name: 'Succulent',
            description: 'another succulent',
            image: 'succulent.jpg',
            numReviews: 2,
            price: 3.99,
            countInStock: 25,
            category: categories[2]._id,
            isFeatured: false
        },
    ]).catch((err) => {
        console.log(err);
    })


    console.log('all done!');
    process.exit(0);
});

