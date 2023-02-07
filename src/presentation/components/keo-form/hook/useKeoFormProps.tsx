import { FormikProps, FormikValues } from 'formik';
import { useMemo, useState } from 'react';

export default function useKeoFormProps<T extends FormikValues>() {
  const [props, getProps] = useState<FormikProps<T>>();
  return {
    props: useMemo(() => props, [props]),
    getProps,
  };
}
