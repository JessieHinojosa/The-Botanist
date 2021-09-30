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
        const isAdmin = false;

        userData.push(
            {
                firstName,
                lastName,
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
            name: 'Indoor',
            description: 'Foliage type indoor plants tend to require less strict caring instuctions and foliage can be just as attrcative as any flowering type.',
            indoor: true,
            outdoor: false
        },
        {
            name: 'Outdoor',
            description: 'Indoor palm type plants have many popular varieties including the parlor palm, kentia, sentry, lady, sago and others.',
            indoor: false,
            outdoor: true
        },
        {
            name: 'Cacti & Succulents',
            description: 'If you have enough light and warmth you can grow cacti. Many interesting and peculiar features have enabled these to become plants for the hobbyist.',
            indoor: true,
            outdoor: true
        },
        {
            name: 'Ferns',
            description: 'Ferns will survive the apocalypse.',
            indoor: true,
            outdoor: true
        }
    ])

    await Product.deleteMany({});

    // create product
    const products = await Product.insertMany([
        {
            name: 'Golden Pothos',
            description: "Epipremnum aureum commonly called golden pothos or devil's ivy, is native to the Solomon Islands. It is a climbing vine that produces abundant yellow-marbled foliage.",
            image: 'golden-pothos.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 14.99,
            countInStock: 50,
            isFeatured: false
        },
        {
            name: 'Snake Plant',
            description: "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp.",
            image: 'sansevieria-2.jpg',
            numReviews: 2,
            category: categories[0],
            price: 14.99,
            countInStock: 20,
            isFeatured: false
        },
        {
            name: 'Chinese Taro',
            description: "Alocasia cucullata is a species of flowering plant in the arum family known by the common names Chinese taro, Chinese ape, Buddha's hand, and hooded dwarf elephant ear. It is kept as an ornamental plant.",
            image: 'chinese-taro.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 19.95,
            countInStock: 15,
            isFeatured: true
        },
        {
            name: 'Monstera',
            description: "Monstera deliciosa, the Swiss cheese plant, is a species of flowering plant native to tropical forests of southern Mexico, south to Panama.",
            image: 'monstera.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 19.99,
            countInStock: 13,
            isFeatured: true
        },
        {
            name: 'ZZ Plant',
            description: "ZZ plants, also known as Zanzibar gems, are low-maintenance houseplants characterized by their shiny, wide, oval-shaped leaves that shoot upward. They are slow-growing plants, so you won't need to repot often, but if you do plant or repot a zz, do so in the spring or summer when it's in an active growth phase.",
            image: 'zanzibar-gem.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 14.99,
            countInStock: 40,
            isFeatured: true
        },
        {
            name: 'Money Plant',
            description: "Pilea peperomioides, the Chinese money plant or missionary plant, is a species of flowering plant in the nettle family Urticaceae, native to Yunnan and Sichuan provinces in southern China.",
            image: 'money-plant.jpg',
            numReviews: 2,
            category: categories[0]._id,
            price: 9.99,
            countInStock: 20,
            isFeatured: true
        },
        {
            name: 'Fiddle-leaf Fig',
            description: "Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone, where it grows in lowland tropical rainforest. It can grow up to 12–15 m tall.",
            image: 'fig.jpg',
            numReviews: 2,
            category: categories[1]._id,
            price: 19.99,
            countInStock: 18,
            isFeatured: true
        },
        {
            name: 'Fig',
            description: "Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone, where it grows in lowland tropical rainforest. It can grow up to 12–15 m tall.",
            image: 'fiddle-leaf-fig.jpg',
            numReviews: 2,
            category: categories[1]._id,
            price: 29.99,
            countInStock: 16,
            isFeatured: false
        },
        {
            name: 'Caladium',
            description: "Caladium is a genus of flowering plants in the family Araceae. They are often known by the common name elephant ear and angel wings. There are over 1000 named cultivars of Caladium bicolor from the original South American plant.",
            image: 'caladium.jpg',
            numReviews: 2,
            category: categories[1]._id,
            price: 12.99,
            countInStock: 30,
            isFeatured: false
        },
        {
            name: 'Banana Leaf',
            description: "Banana leaves are large, wide, elongated, and slightly rounded, averaging two meters in length, a half a meter in width, and 8-12 leaves per tree. The surface of the leaves are waxy, flexible, and glossy, and range in color from lime, olive green, to dark green.",
            image: 'banana-leaf.jpg',
            numReviews: 2,
            category: categories[1]._id,
            price: 19.99,
            countInStock: 22,
            isFeatured: false
        },
        {
            name: 'Lucky Bamboo',
            description: "Dracaena sanderiana is a species of flowering plant in the family Asparagaceae, native to Central Africa.",
            image: 'lucky-bamboo.jpg',
            numReviews: 2,
            category: categories[1]._id,
            price: 12.99,
            countInStock: 6,
            isFeatured: false
        },
        {
            name: 'Echeveria',
            description: "Echeveria is a large genus of flowering plants in the family Crassulaceae, native to semi-desert areas of Central America, Mexico and northwestern South America.",
            image: 'echeveria.jpg',
            numReviews: 2,
            category: categories[2]._id,
            price: 4.99,
            countInStock: 30,
            isFeatured: false
        },
        {
            name: 'Aloe Vera',
            description: "Aloe vera, also known as a burn plant or medicine plant, is a succulent often grown as a houseplant. Although similar in appearance to cacti, aloe vera is not a cactus but a succulent and a member of the lily family.",
            image: 'aloe.jpg',
            numReviews: 2,
            category: categories[2]._id,
            price: 9.99,
            countInStock: 32,
            isFeatured: true
        },
        {
            name: 'Pincushion',
            description: "Pincushion cacti are small plants that usually don’t grow more than 6 inches tall. They can be ball or barrel shaped, and are native to the warmer regions of the US. The pincushion cactus plant is most commonly grown indoors but it can tolerate some chilling temperatures if grown outside.",
            image: 'pincushion.jpg',
            numReviews: 2,
            category: categories[2]._id,
            price: 3.99,
            countInStock: 23,
            isFeatured: false
        },
        {
            name: 'Keeled Ox-Tongue',
            description: "Gasteria carinata (Keeled Ox-tongue) - A stemless aloe-like succulent that forms dense colonies several feet wide of clustered rosettes of upright 6 to 8 inch long triangular spear shaped leaves that are opposite each other at first, but becoming more rosulate with age.",
            image: 'keeled-ox.jpg',
            numReviews: 2,
            category: categories[2]._id,
            price: 5.99,
            countInStock: 11,
            isFeatured: false
        },
        {
            name: 'Lace Aloe',
            description: "Aristaloe is a genus of evergreen flowering perennial plants in the family Asphodelaceae from Southern Africa. Its sole species is Aristaloe aristata, known as guinea-fowl aloe or lace aloe.",
            image: 'lace-aloe.jpg',
            numReviews: 2,
            category: categories[2]._id,
            price: 7.99,
            countInStock: 28,
            isFeatured: false
        },
        {
            name: "Bird's Nest Fern",
            description: "Bird's nest ferns (Asplenium nidus) naturally grow on the surface of other plants. In their rainforest homes, they can be found growing high in the crooks of trees. They form a series of erect, spoon-shaped, bright green fronds that rise from a central rosette. Bird's nest ferns kept as houseplants typically have fronds that grow about 2 feet long and outdoors up to 5 feet. These ferns have a slow growth rate. They're best planted in the spring, though houseplants generally can be started year-round.",
            image: 'birds-nest-fern.jpg',
            numReviews: 2,
            category: categories[3]._id,
            price: 9.99,
            countInStock: 17,
            isFeatured: false
        },
        {
            name: "Bird's Nest Fern",
            description: "Bird's nest ferns (Asplenium nidus) naturally grow on the surface of other plants. In their rainforest homes, they can be found growing high in the crooks of trees. They form a series of erect, spoon-shaped, bright green fronds that rise from a central rosette. Bird's nest ferns kept as houseplants typically have fronds that grow about 2 feet long and outdoors up to 5 feet. These ferns have a slow growth rate. They're best planted in the spring, though houseplants generally can be started year-round.",
            image: 'fern-2.jpg',
            numReviews: 2,
            category: categories[3]._id,
            price: 9.99,
            countInStock: 25,
            isFeatured: false
        }
    ]).catch((err) => {
        console.log(err);
    })


    console.log('all done!');
    process.exit(0);
});

