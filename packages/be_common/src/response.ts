export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export default class ResponseBuilder {
  static success<T>(data: T, message = "Success"): ApiResponse<T> {
    return {
      success: true,
      message,
      data,
    };
  }

  static error(message = "Something went wrong"): ApiResponse<null> {
    return {
      success: false,
      message,
      data: null,
    };
  }
}
