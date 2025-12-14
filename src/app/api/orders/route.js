import { createSessionClient } from "@/appwrite/config";
import { cookies } from "next/headers";
export async function GET(request) {
    const sessionCookie = (await cookies()).get("session");
    
    try {
         const { databases } = createSessionClient(sessionCookie.value);
  const { documents: orders, total } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ORDERS
  );

  return Response.json({ orders, total });
    } catch (error) {
        console.error(error);   
        return new Response("Access denied", { status: 403 });
    }

}
