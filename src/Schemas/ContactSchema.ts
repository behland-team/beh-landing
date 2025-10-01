import {z} from "zod";

export const contactSchema = z.object({
    fullName: z.string().nonempty("وارد کردن نام الزامیست"),
    email: z.email("ایمیل معتبر وارد کنید"),
    phone: z.string().optional(),
    message: z.string().min(10, "حداقل دارای 10 کاراکتر ").max(1000,"حداکثر دارای 1000 کاراکتر")
})