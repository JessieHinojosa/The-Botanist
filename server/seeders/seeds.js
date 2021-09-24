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
            name: 'Bulbous',
            description: 'Growing bulbous plants is easy when choosing the right species. How to care is important to learn and the differences between these and other root systems.',
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
            name: 'Caladiums',
            description: 'test desc1',
            image: 'lofcsfgvtrg',
            numReviews: 2,
            category: categories[0]._id,
            price: 0.99,
            countInStock: 25,
            isFeatured: true
        },
        {
            name: 'Canna',
            description: 'test review name 2',
            image: 'srtgtvegsfgew',
            numReviews: 2,
            category: categories[0]._id,
            price: 0.99,
            countInStock: 25,
            isFeatured: true
        },
        {
            name: 'Schlumbergera',
            description: 'test review name 3',
            image: 'dnbfuyjt',
            numReviews: 2,
            category: categories[1]._id,
            price: 0.99,
            countInStock: 25,
            isFeatured: true
        },
        {
            name: 'Mammillaria',
            description: 'test review name 4',
            image: ' fzdvsfv',
            numReviews: 2,
            category: categories[1],
            price: 0.99,
            countInStock: 25,
            isFeatured: true
        },
        {
            name: 'Tulip Irene Parrot',
            description: 'test description',
            image: 'cafrvwstr',
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: categories[2]._id,
            isFeatured: true
        },
        {
            name: 'test 6 ',
            description: 'bdyrhdt',
            image: 'bdtyfhbrtb',
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: categories[2]._id,
            isFeatured: true
        },
        {
            name: 'test 7',
            description: 'gbsrbv',
            image: ' gxdbtyfhed',
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: categories[3]._id,
            isFeatured: true
        },
        {
            name: 'areca',
            description: 'bndgfhbt',
            image: 'bdhnythffd',
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: categories[3]._id,
            isFeatured: true
        },
    ]).catch((err) => {
        console.log(err);
    })


    console.log('all done!');
    process.exit(0);
});

