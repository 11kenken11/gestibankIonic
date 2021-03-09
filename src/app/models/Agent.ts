export default class User {
    lastName: string;
    firstName: string;
    email: string;
    tel: string;
    password: string;
    role: string;
    status: string;
    matricule: string;
    constructor(lastName: string, firstName: string, email: string, tel: string, password: string, matricule: string) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.tel = tel;
        this.password = password;
        this.role = "AGENT";
        this.status = "VALIDE";
        this.matricule = matricule;
    }
}