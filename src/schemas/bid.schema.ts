import { z } from "zod";

export const bidSchema = z.object({
  bidAmount: z.coerce.number().min(1),
  deliveryDays: z.coerce.number().min(1),
  coverLetter: z.string().min(20),
});

export type BidFormInput = z.input<typeof bidSchema>;
export type BidFormData = z.output<typeof bidSchema>;