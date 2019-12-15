export class Volunteer {
  volunteerId: number;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  status: string;
  skills: string;
  availability: string;

  constructor(volunteerId?: number, fname?: string, lname?: string, phone?: string,
              email?: string, status?: string, skills?: string, availability?: string) {
    this.volunteerId = volunteerId;
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
