const { models: { User, Plant } } = require("../server/db/models")
const { db } = require("../server/db");

async function seed() {
    try {
        await db.sync({ force: true })
        console.log('db synced!')

        const users = await Promise.all([
            User.create({ email: 'cody@email.com', password: '123' }),
            User.create({ email: 'murphy@email.com', password: '123' })
        ])

        //plants
        await Plant.create({
            plantName: "fiddle leaf fig",
            potSize: 10,
            care: "keep in bright indirect light, water when dry",
            description: "Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone, where it grows in lowland tropical rainforest. It can grow up to 12–15 m tall",
            price: 15.99,
            qty: 100,
            image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1656.JPG"
        })

        await Plant.create({
            plantName: 'cebu blue pothos',
            potSize: 8,
            care: 'keep in bright indirect light, water when dry',
            description: 'Epipremnum pinnatum is a species of flowering plant in the family Araceae. It has many common names, including centipede tongavine and dragon-tail plant.',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG'
        })

        await Plant.create({
            plantName: 'zz raven',
            potSize: 8,
            care: 'keep in bright indirect light, water when dry',
            description: 'Zamioculcas is a genus of flowering plants in the family Araceae, containing the single species Zamioculcas zamiifolia. It is a tropical perennial plant native to eastern Africa, from southern Kenya to northeastern South Africa.',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG'
        })

        await Plant.create({
            plantName: 'dragon bone cactus',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'tropical perennial shrub that is native to tropical areas of Asia. These plants have multiple spiny branches that grow in various directions with smaller branches extending from the main stalks.',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1669.JPG'
        })

        await Plant.create({
            plantName: 'avocado plant',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'Avocados are tropical trees, so they will prefer a warmer environment with lots of sun.',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1670.JPG'
        })

        await Plant.create({
            plantName: 'wax plant',
            potSize: 2,
            care: 'keep in bright indirect light, water when dry',
            description: 'Hoya is a genus of over 500 accepted species of tropical plants in the dogbane family, Apocynaceae. Most are native to several countries of Asia such as Philippines, India, Thailand, Malaysia, Vietnam, Bangladesh, Indonesia, Polynesia, New Guinea, and vast variety of species could also be found in',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1672.JPG'
        })


        await Plant.create({
            plantName: 'prayer plant',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1676.JPG'
        })

        await Plant.create({
            plantName: 'money tree',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1679.JPG'
        })

        await Plant.create({
            plantName: 'spiderwort',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1680.JPG'
        })


        await Plant.create({
            plantName: 'junlge catus',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1689.JPG'
        })

        await Plant.create({
            plantName: 'mistletoe catus',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG'
        })

        await Plant.create({
            plantName: 'whale fin',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1697_2.JPG'
        })

        await Plant.create({
            plantName: 'cylindrical snake plant',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1700.JPG'
        })

        await Plant.create({
            plantName: 'mikado snake plant',
            potSize: 4,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1702.JPG'
        })

        await Plant.create({
            plantName: 'string of hearts',
            potSize: 1,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,
            image: 'https://hosting.photobucket.com/images/i/MerleSelf/IMG_1706.JPG'
        })

        await Plant.create({
            plantName: 'tree fern',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'Peperomia',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'Orchid',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'Cactus',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'lithops',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'maidenhair fern',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'pothos',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'Pink Princess',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'Monstera',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: ' sheet moss',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'tilandsia',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'begonia',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'basil',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'cat mint',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'mint',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'rosemary',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'rose bush',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'tomato',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'peppers',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'banana tree',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'coffee plant',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'green onion',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'lavender',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'bonsai',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'spider plant',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'milk thistle',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'bob ',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })

        await Plant.create({
            plantName: 'drick',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'chrus',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'larry',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'george',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'mike',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'derek',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'kate',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })
        await Plant.create({
            plantName: 'smoke',
            potSize: 6,
            care: 'keep in bright indirect light, water when dry',
            description: 'plant',
            price: 15.99,
            qty: 100,

        })



        console.log(`seeded ${users.length} users`)
        console.log(`seeded successfully`)
    } catch (err) {
        console.log(err)
    }
}

// async function runSeed() {
//     console.log('seeding...')
//     try {
//         await seed()
//     } catch (err) {
//         console.error(err)
//     } finally {
//         console.log('closing db connection')
//         await db.close()
//         console.log('db connection closed')
//     }
// }


seed();