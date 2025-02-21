"use client";

import { trpc } from "@web/app/trpc";
import { useEffect, useState } from "react";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello.query({ name: `Tom` }).then((data) => {
      console.log(data);
      setGreeting(data);
    });
  }, []);
  return <p>I am client side: {greeting}</p>;
}
