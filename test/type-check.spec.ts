import { z } from "zod";

// Counter schema: ensure `count` is a number
const CounterSchema = z.object({
  count: z.number(),
});

describe("CounterSchema zod type checks", () => {
  test("valid counter object passes parsing", () => {
    const data = { count: 5 };
    const parsed = CounterSchema.parse(data);
    expect(parsed).toEqual(data);
  });

//   test("invalid counter (count as string) throws", () => {
//     const data = { count: "5" } as unknown;
//     expect(() => CounterSchema.parse(data)).toThrow();
//   });
});
