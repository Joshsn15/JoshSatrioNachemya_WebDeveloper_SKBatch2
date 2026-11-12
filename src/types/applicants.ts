

class Applicant {
    id: number;
    name: string;
    email: string;
    phone: string;
    jobId: number;

    constructor(id: number, name: string, email: string, phone: string, jobId: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.jobId = jobId;
    }
}


export default Applicant

