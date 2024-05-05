import { useEffect, useState } from "react";

interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrorsProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const useFormValidator = (formData: FormDataProps) => {
  const [errors, setErrors] = useState<FormErrorsProps>({});

  useEffect(() => {
    const validateFormData = () => {
      const errors: FormErrorsProps = {};

      if (!formData.name.trim()) {
        errors.name = "El nombre es requerido";
      }

      if (!formData.subject.trim()) {
        errors.subject = "El asunto es requerido";
      }

      if (!formData.message.trim()) {
        errors.message = "Debes escribir un mensaje";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!formData.email.trim()) {
        errors.email = "El email es requerido";
      } else if (!emailRegex.test(formData.email)) {
        errors.email = "Formato de email inválido";
      }

      setErrors(errors);
    };

    validateFormData();
  }, [formData]);

  return errors;
};

export default useFormValidator;
