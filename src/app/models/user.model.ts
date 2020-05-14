export class User {

    id: string;
    fullname: string;
    email: string;
    phone: string;
    created_at: string;

    constructor(user: any) {

        this.id = user.id;
        this.fullname = user.fullname;
        this.email = user.email;
        this.phone = user.phone;
        this.created_at = user.created_at

    }

}
