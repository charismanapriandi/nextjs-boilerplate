import KeoForm, { KeoFormProps } from './KeoForm';
import Control from './Control';
import Row from './Row';
import Observe from './Observe';
import useKeoFormProps from './hook/useKeoFormProps';

export default Object.assign(KeoForm, {
  Control,
  Row,
  Observe,
});

export {
  useKeoFormProps,
};
export type {
  KeoFormProps,
};
