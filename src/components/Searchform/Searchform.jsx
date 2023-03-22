import { Formik } from 'formik';
import {
  Form,
  ButtonForm,
  Field,
  ErrorMessage,
  // BiSearch,
} from './Searchform.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  searchName: Yup.string('')
    .trim()
    .lowercase()
    .matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format')
    .required('Please enter here what you are looking for'),
});

const Searchform = ({ onSearch }) => (
  <Formik
    initialValues={{ searchName: '' }}
    validationSchema={SignupSchema}
    onSubmit={(values, actions) => {
      const { searchName } = values;
      onSearch(searchName);
      actions.resetForm();
    }}
  >
    <Form>
      <div style={{ width: '100%' }}>
        <Field type="text" name="searchName" placeholder="Search movie" />
        <ErrorMessage name="searchName" component="div" />
      </div>
      <ButtonForm type="submit">Search</ButtonForm>
    </Form>
  </Formik>
);

export default Searchform;
