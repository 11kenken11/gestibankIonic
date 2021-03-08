export default class User {
    lastName: string;
    firstName: string;
    email: string;
    tel: string;
    password: string;
    role: string;
    status: string;
    typeCompte: string;
    agentMatricule: string;
    matricule: string;
    constructor(lastName: string, firstName: string, email: string, tel: string, typeCompte: string) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.tel = tel;
        this.typeCompte = typeCompte;
        this.role = "CLIENT";
        this.status = "EN_ATTENTE";
        this.password = null;
        this.agentMatricule = null;
    }
}