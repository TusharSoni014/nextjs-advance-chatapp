import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email } = body;

    const RESTResponse = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email:${email}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: "no-store",
      }
    );
    const data = (await RESTResponse.json()) as { result: string };
    const idToAdd = data.result;
    if (!idToAdd) new Response("This person does not exist", { status: 400 });

    const session = await getServerSession(authOptions);
    
    if (!session) new Response("Unauthorized", { status: 401 });

    if (idToAdd === session?.user.id) {
      return new Response("Cannot add yourself as friend!", { status: 400 });
    }
  } catch (error) {}
};
