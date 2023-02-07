import { MINIMUM_PASSWORD_LENGTH } from 'domain/_app.constants';
import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(MINIMUM_PASSWORD_LENGTH).required(),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'password must match'),
  business: yup.string().required(),
});

export type RegisterSchema = yup.InferType<typeof registerSchema>
