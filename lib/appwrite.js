import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';


export const config ={
    endpoint: 'https://cloud.appwrite.io/v1',
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

    export async function signIn(email, password) {
      try{
        const session = await account.createEmailPasswordSession(
          email, password)
          return session;
        
      }catch (error) {
        throw new Error(error);
    
      }
      
    }


   export const getCurrentUser  = async () => {
    try {
      const currentAccount = await account.get();

      if(!currentAccount) throw Error;

      const currentUser = await databases.listDocuments(
       config.databaseId,
       config.userCollectionId ,
       [Query.equal('accountId', currentAccount.$id)]
      )

      if(!currentUser) throw Error;
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
    }
   }

