import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "First name is required.",
      "string.min": "First name must be at least 2 characters.",
      "string.max": "First name cannot exceed 100 characters.",
      "any.required": "First name is required.",
    }),

  lastName: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "Last name is required.",
      "string.min": "Last name must be at least 2 characters.",
      "string.max": "Last name cannot exceed 100 characters.",
      "any.required": "Last name is required.",
    }),

  email: Joi.string()
    .trim()
    .email()
    .max(150)
    .required()
    .messages({
      "string.email": "Please provide a valid email address.",
      "string.empty": "Email is required.",
      "any.required": "Email is required.",
    }),

  password: Joi.string()
    .min(8)
    .max(50)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]+$/
    )
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.min": "Password must be at least 8 characters.",
      "string.max": "Password cannot exceed 50 characters.",
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character.",
      "any.required": "Password is required.",
    }),

  phone: Joi.string()
    .trim()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Phone number must contain only digits and be between 10 and 15 digits.",
      "string.empty": "Phone number is required.",
      "any.required": "Phone number is required.",
    }),
});

export default registerSchema;