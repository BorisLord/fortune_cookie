import * as assert from "@std/assert"
import { fortuneCookie } from "../src/main.ts";
import { sentences } from "../src/sentences.ts";

Deno.test("Fortune Test",() => {
  const fortune = fortuneCookie()
  assert.assert(
    sentences.some(sentence => fortune.includes(sentence)),
    `Fortune ${fortune} is not include in sentences`
  );
});
