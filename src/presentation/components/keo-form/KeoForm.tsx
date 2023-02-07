import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { styled } from '@mui/material';
import { Form as FormikForm, Formik, FormikConfig, FormikHelpers, FormikProps, FormikValues } from 'formik';
import { Dispatch, ReactNode, SetStateAction } from 'react';

interface SubmitButtonProps extends LoadingButtonProps {
  label?: string
}

export interface KeoFormProps<T> extends FormikConfig<T> {
  children: ReactNode;
  submitButtonProps?: SubmitButtonProps;
  centered?: boolean;
  getProps?: Dispatch<SetStateAction<FormikProps<T> | undefined>>
}

const Form = styled(({ centered, ...props }: any) => <FormikForm {...props as any} />)<{
  centered: boolean
}>(
  ({ centered }) => ({
    marginLeft: centered ? 'auto' : 0,
    marginRight: centered ? 'auto' : 0,
    maxWidth: centered ? '500px' : 'auto',
    '.KeoFormRow-root:first-of-type ': {
      '.MuiFormControl-root': {
        marginTop: '0',
      },
    },
    '.MuiFormControl-root:first-of-type': {
      marginTop: '0',
    },
    '.MuiFormControl-root.KeoFormControl-disableMargin': {
      marginTop: 0,
    },
    '.MuiFormControl-root, .KeoForm-submitButton': {
      marginTop: '25px',
      display: 'block',
    },
  }),
);

export default function FormikContainer<T extends FormikValues>({
  children,
  submitButtonProps,
  centered,
  getProps,
  onSubmit,
  ...props
}: KeoFormProps<T>) {
  const onFormikSubmit = async (values: T, helpers: FormikHelpers<T>) => {
    try {
      await onSubmit(values, helpers);
    } finally {
      helpers.setSubmitting(false);
    }
  };

  return (
    <Formik
      onSubmit={onFormikSubmit}
      {...props}
    >
      {(props: FormikProps<T>) => {
        getProps && getProps(props);
        return (
          <Form
            centered={centered ?? false}
            onSubmit={props.handleSubmit}
            onReset={props.handleReset}
          >
            {children}
            <LoadingButton
              type="submit"
              className="KeoForm-submitButton"
              loading={props.isSubmitting}
              fullWidth
              variant="contained"
              {...submitButtonProps}
            >
              {submitButtonProps?.label ? submitButtonProps.label : 'Submit'}
            </LoadingButton>
          </Form>
        );
      }}
    </Formik>
  );
}
