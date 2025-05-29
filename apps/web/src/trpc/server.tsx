import { createTRPCClient, httpLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { cache } from "react";
import "server-only"; // <-- ensure this file cannot be imported from the client
import { makeQueryClient } from "./query-client";
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);
export const trpc = createTRPCOptionsProxy({
  client: createTRPCClient({
    links: [httpLink({ url: "http://localhost:4000/trpc" })],
  }),
  queryClient: getQueryClient,
});
