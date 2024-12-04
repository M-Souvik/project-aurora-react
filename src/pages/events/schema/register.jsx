import * as z from "zod"

export const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  department: z.string().min(2, {
    message: "Department must be at least 2 characters.",
  }),
  year: z.string({
    required_error: "Please select a year.",
  }),
})