export class Volunteer {
  id: number;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  status: string;
  skills: string;
  availability: string;

  constructor(id?: number, fname?: string, lname?: string, phone?: string,
              email?: string, status?: string, skills?: string, availability?: string) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.email = email;
    this.status = status;
    this.skills = skills;
    this.skills = skills;
    this.availability = availability;
  }
}
