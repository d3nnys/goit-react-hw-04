import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';

const initialValues = {
  query: '',
};

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            //   autocomplete="off"
            //   autofocus
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
