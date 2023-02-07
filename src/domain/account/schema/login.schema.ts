import { MINIMUM_PASSWORD_LENGTH } from 'domain/_app.constants';
import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(MINIMUM_PASSWORD_LENGTH).required(),
});

export type LoginSchema = yup.InferType<typeof loginSchema>
