export const dynamic = "force-static";

export const GET = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return new Response(Math.random().toString());
};
