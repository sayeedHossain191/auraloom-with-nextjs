import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {

    const newUser = await request.json();
    try {
        const db = await connectDB()

        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'User Exist' }, { status: 304 })
        }
        const resp = await userCollection.insertOne(newUser)
        return Response.json({ message: "User Created" }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'Something went wrong', error }, { status: 500 })
    }
}

// import { connectDB } from "@/lib/connectDB";

// export const POST = async (request) => {
//     const newUser = await request.json();

//     try {
//         const db = await connectDB(); // Reuse the connection from connectDB()

//         const userCollection = db.collection('users');
//         const exist = await userCollection.findOne({ email: newUser.email });

//         if (exist) {
//             return new Response(JSON.stringify({ message: 'User Exists' }), { status: 304 });
//         }

//         const resp = await userCollection.insertOne(newUser);
//         return new Response(JSON.stringify({ message: "User Created" }), { status: 200 });
//     } catch (error) {
//         console.error("Error during user creation:", error);
//         return new Response(JSON.stringify({ message: 'Something went wrong', error }), { status: 500 });
//     }
// };
