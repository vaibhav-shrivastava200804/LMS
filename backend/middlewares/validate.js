import HTTP_STATUS from "../constants/httpStatus.js";
import ApiError from "../utils/ApiError.js";

const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
      convert: true,
    });

    if (error) {
      const errors = error.details.map((item) => ({
        field: item.path.join("."),
        message: item.message.replace(/"/g, ""),
      }));

      return next(
        new ApiError(
          HTTP_STATUS.BAD_REQUEST,
          "Validation failed",
          errors
        )
      );
    }

    req[property] = value;

    next();
  };
};

export default validate;