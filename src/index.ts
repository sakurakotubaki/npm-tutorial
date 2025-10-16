import * as z from "zod";

const UserModelSchema = z.object({
    userId: z.number(),
    userName: z.string(),
});

type UserModel = z.infer<typeof UserModelSchema>;

const validateUser = (data: unknown): UserModel => {
    // return UserModelSchema.parse(data);
    try {
        return UserModelSchema.parse(data);
    } catch (error) {
        throw new Error(`データ型が不正です${error} + ${JSON.stringify(data)}`);
    }
};

// run
// console.log(validateUser({ userId: 1, userName: "John" }));
console.log(validateUser({ userId: "1", userName: "John" })); // error