import { createAdminClient } from "@/appwrite/config";
export async function GET(request) {
  const { databases } = createAdminClient();
  const { documents: orders, total } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ORDERS
  );
  
  return Response.json({ orders, total });
}
