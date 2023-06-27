
export default class UserResponse {
    public readonly status;
    public readonly data;

    constructor(status:number, data: any) {
        this.status = status;
        this.data = data;
    }
}