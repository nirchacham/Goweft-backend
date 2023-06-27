
export default class CustomResponse {
    public readonly status;
    public readonly message;

    constructor(status:number, message: any) {
        this.status = status;
        this.message = message;
    }
}