import ClientSide from "./ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const greeting = await trpc.hello.query({ name: "John" });
  return (
    <div>
      {greeting}
      <ClientSide />
    </div>
  );
}
