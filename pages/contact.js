/* eslint-disable react/prop-types */
import Head from "next/head";
import { Form, Formik } from "formik";
import schemas, { objSchema } from "../utils/schemas";
import { fetcher } from "../lib/api";
import TextAreaInput from "../components/formik/TextAreaInput";
import TextInput from "../components/formik/TextInput";
import Button from "../components/Button";

const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "Brian",
        email: "brian@mail.com",
        comment: "Hello! This is a test message",
      }}
      validationSchema={objSchema({
        email: schemas.email,
        name: schemas.name,
        comment: schemas.commentBody,
      })}
      onSubmit={async (values) => handleSubmit(values)}
    >
      {(formik) => (
        <Form className="contact-form">
          <TextInput label="Full Name" name="name" />

          <TextInput label="Email" name="email" type="email" />

          <TextAreaInput
            label="Enter message"
            placeholder="Type your message here"
            name="comment"
          />

          <Button
            type="submit"
            isLoading={formik.isSubmitting}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default function Contact() {
  const handleContactReq = async (values) => {
    try {
      const data = await fetcher("/api", values, "POST");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <ContactForm handleSubmit={handleContactReq} />
    </div>
  );
}
