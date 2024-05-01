export const PATH = {
  SIGN_IN: {
    _: "/",
    get() {
      return this._;
    },
  },
  RECRUITER: {
    _: "/recruiter",
    get() {
      return this._;
    },
    getDetail(id: string | number) {
      return `${this._}/${id}`;
    },
  },
  EMPLOYEE: {
    _: "/employee",
    get() {
      return this._;
    },
    getDetail(id: string | number) {
      return `${this._}/${id}`;
    },
  },
  JOBS: {
    _: "/jobs",
    APPLICATIONS: "/applications",
    get() {
      return this._;
    },
    getApplications(jobId: number | string) {
      return `${this._}/${jobId}${this.APPLICATIONS}`;
    },
    getApplicationDetail(
      jobId: string | number,
      applicationId: number | string
    ) {
      return `${this._}/${jobId}${this.APPLICATIONS}/${applicationId}`;
    },
  },
  REGISTRATION: {
    _: "/registration-form",
    get() {
      return this._;
    },
    getDetail(id: string | number) {
      return `${this._}/${id}`;
    },
  },
};
