import "dotenv/config" ;
import { MongoClient, ServerApiVersion } from "mongodb";

const connectionString = process.env.CONNECTION_STRING ;

const client = new MongoClient(connectionString, 
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    }
) ;

await client.connect() ;

export default client ;