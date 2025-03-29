import { defineEnableDraftMode } from "next-sanity/draft-mode";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

export const { GET } = foo();

function foo() {
  console.log("Hey");
  return defineEnableDraftMode({
    client: client.withConfig({ token }),
  });
}
