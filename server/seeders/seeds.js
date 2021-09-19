const faker = require('faker');

const db = require('../config/connection');
const { User, Category, Product } = require('../models');

db.once('open', async () => {
    
    await User.deleteMany({});
    await Category.deleteMany({});
    // await Product.deleteMany({});

  
    // create user data
    const userData = [];
  
    for (let i = 0; i < 50; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const shippingAddress ={
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

      const categoryData = [

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
    ]
        const createdCategories = await Category.collection.insertMany(categoryData);
  

    // create product
      const productData = [
        {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'Foliage',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'Foliage',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'Foliage',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'Foliage',
            isFeature: true
         },
        {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'cactus',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'cactus',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'cactus',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'cactus',
            isFeature: true
         },
        {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'bulbous',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'bulbous',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'bulbous',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'bulbous',
            isFeature: true
         },
        {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'palm',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'palm',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'palm',
            isFeature: true
         },
         {
            name: '',
            description: '',
            image: '',
            reviews: [
                {
                    name: '',
                    commment: ''
                },
                {
                    name: '',
                    commment: ''
                }
            ],
            numReviews: 2,
            price: 0.99,
            countInStock: 25,
            category: 'palm',
            isFeature: true
         },
        ]   
        const createdProducts = await Product.collection.insertMany(productData);

              
    console.log('all done!');
    process.exit(0);
  });
  
