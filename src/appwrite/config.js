import {Client, Databases, Account} from 'node-appwrite';

const createAdminClient = () => {
    const client = new Client();
    client
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
        .setKey(process.env.NEXT_PUBLIC_API_KEY);
    
    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    }
};


const createSessionClient = (session) => {
    const client = new Client();
    client
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
       
    if (session) {
        client.setSession(session);
    }
    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    }
};
export { createAdminClient, createSessionClient };