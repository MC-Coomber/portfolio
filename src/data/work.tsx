export default class WorkModel {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;

  constructor(
    company: string,
    position: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    this.company = company;
    this.position = position;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
