import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


export const config ={
    endpoint: 'hyyps://cloud.appwrite.io/v1',
    platform:'co.edu.sena',
    projectId: '66c7b9220021c6a971c3',
    databaseId:'66c7bc2700147d91a8ec',
    userCollectionId:'66c7bc63003c5c2a4702',
    videoCollectionId:'66c7bca30014df5a0a6d',
    storageId: '66c7bf7d0034e310f864'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.


    const account = new Account(client);
    const avatars=  new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {
      try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,

        )
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email,password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
            avatarUrl,
            username,
            emailaccountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
            }
        )

        return newUser;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }

    export const signIn = async (email, password) => {
      try {
        const session = await account.createEmailSession(email, password);
        return session;
      }catch(error){
        throw new Error(error);
      }
    }

