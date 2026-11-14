/**
 * Lead Data Model & Schema Validator
 */

export class Lead {
  constructor({ fullName, workEmail, company, services, budget, message, status = 'new' }) {
    this.fullName = fullName?.trim();
    this.workEmail = workEmail?.trim().toLowerCase();
    this.company = company?.trim() || 'Undisclosed';
    this.services = Array.isArray(services) ? services : [services];
    this.budget = budget || '$25k - $50k';
    this.message = message?.trim() || '';
    this.status = status; // 'new' | 'contacted' | 'proposal_sent' | 'contract_signed'
    this.createdAt = new Date().toISOString();
  }

  // Validate required fields
  validate() {
    const errors = [];
    if (!this.fullName || this.fullName.length < 2) {
      errors.push('Full name must be at least 2 characters long.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.workEmail || !emailRegex.test(this.workEmail)) {
      errors.push('A valid work email address is required.');
    }
    if (!this.services || this.services.length === 0) {
      errors.push('At least one service capability must be selected.');
    }
    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  toFirestore() {
    return {
      fullName: this.fullName,
      workEmail: this.workEmail,
      company: this.company,
      services: this.services,
      budget: this.budget,
      message: this.message,
      status: this.status,
      createdAt: this.createdAt,
    };
  }
}
