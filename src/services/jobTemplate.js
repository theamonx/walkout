export default  class Job {
        constructor(role, company, logo, category, timing, lsalary, usalary, region){
            this.role = role;
            this.company = company;
            this.logo = logo;
            this.category = category;
            this.timing = timing ? "Full-Time" : "Part-Time";
            this.lsalary = lsalary;
            this.usalary = usalary;
            this.region = region;
        }
  }


