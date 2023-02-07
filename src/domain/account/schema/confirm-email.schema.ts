import * as yup from 'yup';

export const confirmEmailSchema = yup.object({
  email: yup.string().email().required(),
});

export type ConfirmEmailSchema = yup.InferType<typeof confirmEmailSchema>
