import React from "react";
import { useForm, Controller } from "react-hook-form";
import CardFormPicture from "@/assets/images/picture/card-form-picture.svg?react";
import {
  ContactFormContainer,
  ContactFormBox,
  RadioGroup,
  RadioOption,
  Label,
  Input,
  TextArea,
  SubmitButton,
  SvgDecoration,
  ErrorText,
} from "./ContactForm.styled";

interface FormValues {
  name: string;
  email: string;
  message: string;
  contactType: "sayHi" | "quote";
}

function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contactType: "sayHi",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <ContactFormContainer>
      <ContactFormBox onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup>
          <Controller
            name="contactType"
            control={control}
            render={({ field }) => (
              <>
                <RadioOption>
                  <input
                    type="radio"
                    id="sayHi"
                    value="sayHi"
                    checked={field.value === "sayHi"}
                    onChange={field.onChange}
                  />
                  <label htmlFor="sayHi">Say Hi</label>
                </RadioOption>
                <RadioOption>
                  <input
                    type="radio"
                    id="quote"
                    value="quote"
                    checked={field.value === "quote"}
                    onChange={field.onChange}
                  />
                  <label htmlFor="quote">Get a Quote</label>
                </RadioOption>
              </>
            )}
          />
        </RadioGroup>

        <Label>Name</Label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => <Input {...field} placeholder="Name" />}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <Label>Email*</Label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => <Input {...field} placeholder="Email" />}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Label>Message*</Label>
        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <TextArea {...field} placeholder="Message" rows={5} />
          )}
        />
        {errors.message && <ErrorText>{errors.message.message}</ErrorText>}

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactFormBox>
      <SvgDecoration>
        <CardFormPicture />
      </SvgDecoration>
    </ContactFormContainer>
  );
}

export default React.memo(ContactForm);
