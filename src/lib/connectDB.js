import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;

    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        }
        );

        db = client.db('auraloom')
        return db
    } catch (error) {
        console.log(error)
    }
}


// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@atlascluster.bbzq5pl.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`;

// let cachedClient = null;
// let cachedDb = null;

// export async function connectDB() {
//     if (cachedDb) {
//         return cachedDb;
//     }

//     if (!cachedClient) {
//         cachedClient = new MongoClient(uri, {
//             serverApi: {
//                 version: ServerApiVersion.v1,
//                 strict: true,
//                 deprecationErrors: true,
//             },
//         });

//         try {
//             await cachedClient.connect();
//             console.log("Connected to MongoDB!");
//         } catch (error) {
//             console.error("Could not connect to MongoDB:", error);
//             throw new Error("Failed to connect to MongoDB");
//         }
//     }

//     cachedDb = cachedClient.db('myDatabase'); // Change 'myDatabase' to your actual database name
//     return cachedDb;
// }

