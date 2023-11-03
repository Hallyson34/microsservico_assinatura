export class ClassValidatorErrorResponse {
  message: string[];
  error: string;
  statusCode: number;

  static create(message: string) {
    const response = new ClassValidatorErrorResponse();
    response.message = [message];
    response.error = 'Bad Request';
    response.statusCode = 400;
    return response;
  }
}
