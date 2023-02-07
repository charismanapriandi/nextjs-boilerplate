import { FormikValues } from 'formik';
// import FieldValue, { FieldValueProps } from './observer/FieldValue';

type ObserveFieldValueProps<T> = { observer: 'values.field' } 
  // & FieldValueProps<T>

export default function Observe<T extends FormikValues>({
  observer,
  ...props
}: ObserveFieldValueProps<T>) {
  switch (observer) {
    // case 'values.field':
    //   return <FieldValue {...props as FieldValueProps<T>} />;
    default:
      throw new Error('observer is undefined');
  }
}
