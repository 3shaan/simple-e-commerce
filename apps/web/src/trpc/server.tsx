import "server-only"; // <-- ensure this file cannot be imported from the client

import { AppRouter } from "@server/trpc/trpc.route";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { createTRPCClient, httpLink } from "@trpc/client";
import {
  TRPCQueryOptions,
  createTRPCOptionsProxy,
} from "@trpc/tanstack-react-query";
import { cache } from "react";
import SuperJSON from "superjson";
import { makeQueryClient } from "./query-client";
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient<AppRouter>({
    links: [
      httpLink({
        url: "http://localhost:4000/trpc",
        transformer: SuperJSON,
      }),
    ],
  }),
  queryClient: getQueryClient,
});

// Hydrate the client on the server
export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  );
}

// Prefetch the query on the server
export function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T
) {
  const queryClient = getQueryClient();
  if (queryOptions.queryKey[1]?.type === "infinite") {
    void queryClient.prefetchInfiniteQuery(queryOptions as any);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}
