class ApiResponse {
  constructor({
    success = true,
    statusCode = 200,
    message = "Success",
    data = null,
    meta = null,
  } = {}) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;

    if (meta) {
      this.meta = meta;
    }
  }

  static success(data = null, message = "Success", statusCode = 200, meta = null) {
    return new ApiResponse({
      success: true,
      statusCode,
      message,
      data,
      meta,
    });
  }

  static created(data = null, message = "Created") {
    return new ApiResponse({
      success: true,
      statusCode: 201,
      message,
      data,
    });
  }

  static noContent(message = "No Content") {
    return new ApiResponse({
      success: true,
      statusCode: 204,
      message,
      data: null,
    });
  }

  static error(message = "Something went wrong", statusCode = 500, data = null) {
    return new ApiResponse({
      success: false,
      statusCode,
      message,
      data,
    });
  }
}

export default ApiResponse;

