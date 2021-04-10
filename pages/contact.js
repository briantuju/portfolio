/* eslint-disable react/prop-types */
import Head from "next/head";
import { useState } from "react";
import { Form, Formik } from "formik";
import { fetcher } from "../lib/api";
import { env } from "../utils/constants";
import schemas, { objSchema } from "../utils/schemas";
import TextAreaInput from "../components/formik/TextAreaInput";
import TextInput from "../components/formik/TextInput";
import Button from "../components/Button";

const ContactForm = ({ handleSubmit, formState }) => {
  const { msg, error } = formState;

  return (
    <Formik
      initialValues={{ name: "", email: "", comment: "" }}
      validationSchema={objSchema({
        email: schemas.email,
        name: schemas.name,
        comment: schemas.commentBody,
      })}
      onSubmit={async (values) => handleSubmit(values)}
    >
      {(formik) => (
        <Form className="contact-form">
          <TextInput
            label="Full Name"
            name="name"
            placeholder="John Doe"
            disabled={
              formik.isSubmitting || (formik.submitCount >= 1 && !error)
            }
          />

          <TextInput
            label="Email"
            name="email"
            placeholder="user@email.domain"
            type="email"
            disabled={
              formik.isSubmitting || (formik.submitCount >= 1 && !error)
            }
          />

          <TextAreaInput
            label="Enter message"
            placeholder="Type your message here"
            name="comment"
            disabled={
              formik.isSubmitting || (formik.submitCount >= 1 && !error)
            }
          />

          {msg && !error && <p className="contact-form-msg">{msg}</p>}
          {msg && error && <p className="contact-form-msg-err">{msg}</p>}

          <Button
            type="submit"
            isLoading={formik.isSubmitting}
            disabled={
              !(formik.isValid && formik.dirty) ||
              (formik.submitCount >= 1 && !error)
            }
          >
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default function Contact() {
  const [formState, setFormState] = useState({ msg: null, error: false });

  const handleContactReq = async (values) => {
    try {
      setFormState({ msg: null, error: false });
      const data = await fetcher(env.apiUrl + "contact", values, "POST");

      setFormState({ msg: data.msg });
    } catch (error) {
      setFormState({ msg: error.message, error: true });
    }
  };

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <ContactForm handleSubmit={handleContactReq} formState={formState} />
    </div>
  );
}
