import {z} from "zod";

export const commentsSchema = z.object({
    name: z.string().nonempty("وارد کردن نام الزامیست"),
    email: z.email("ایمیل معتبر وارد کنید"),
    comment: z.string().nonempty("لطفا نظر خود را وارد کنید"),
    rate: z.number().optional(),
})