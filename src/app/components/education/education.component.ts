import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { CERTIFICATES, CERTIFICATE_CATEGORIES, Certificate } from '../../data/certificates';

export interface DraftCertificate {
  id: string;
  name: string;
  issuer: string;
  category: Certificate['category'];
  verifyUrl: string;
  issued: string;
  credentialId: string;
  pdf: string;
  pdfFile?: File;
  pdfUrl?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationList = [
    {
      school: 'KIIT University',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2020 – 2024',
      grade: '8.80 CGPA'
    },
    {
      school: 'Miss Hill H. S. School',
      degree: 'High School (Class IX – XII)',
      period: '2016 – 2020',
      grade: ''
    }
  ];

  education = this.educationList[0];

  // Certifications dynamic state
  publishedCertificates: Certificate[] = CERTIFICATES;
  draftCertificates: DraftCertificate[] = [];
  removedCertificateIds: string[] = [];
  categories = CERTIFICATE_CATEGORIES;
  selectedCategory: string = 'All';
  searchQuery: string = '';
  sortBy: 'recent' | 'name' | 'issuer' = 'recent';
  showAllCertificates: boolean = false;
  defaultLimit: number = 6;

  // Owner Mode State
  isOwner: boolean = false;
  showPinModal: boolean = false;
  pinInput: string = '';
  pinError: string = '';
  copySuccess: boolean = false;

  // New Certificate Form Model
  newCert = {
    name: '',
    issuer: '',
    category: 'Resilience & BCDR' as Certificate['category'],
    issued: '',
    credentialId: '',
    verifyUrl: '',
    pdfFile: null as File | null,
    pdfFileName: ''
  };

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const isOwnerUrl = urlParams.get('owner') === 'true' || 
                         urlParams.get('admin') === 'true' || 
                         window.location.hash === '#admin';
      const isOwnerStorage = localStorage.getItem('portfolio_is_owner') === 'true';

      if (isOwnerUrl || isOwnerStorage) {
        this.isOwner = true;
        localStorage.setItem('portfolio_is_owner', 'true');
      }

      // Check for previously cached draft certificates in local storage
      try {
        const cachedDrafts = localStorage.getItem('portfolio_draft_certs');
        if (cachedDrafts) {
          const parsed = JSON.parse(cachedDrafts);
          if (Array.isArray(parsed)) {
            this.draftCertificates = parsed;
          }
        }
      } catch (e) {
        // ignore parse error
      }

      // Check for previously removed certificate IDs in local storage
      try {
        const cachedRemoved = localStorage.getItem('portfolio_removed_cert_ids');
        if (cachedRemoved) {
          const parsed = JSON.parse(cachedRemoved);
          if (Array.isArray(parsed)) {
            this.removedCertificateIds = parsed;
          }
        }
      } catch (e) {
        // ignore parse error
      }
    }
  }

  // Dynamic Filtering, Search & Sorting
  get activePublishedCertificates(): Certificate[] {
    return this.publishedCertificates.filter(c => !this.removedCertificateIds.includes(c.id));
  }

  get allCertificates(): (Certificate | DraftCertificate)[] {
    return [...this.draftCertificates, ...this.activePublishedCertificates];
  }

  get filteredCertificates(): (Certificate | DraftCertificate)[] {
    let list = this.allCertificates;

    // Filter by Category
    if (this.selectedCategory !== 'All') {
      list = list.filter(c => c.category === this.selectedCategory);
    }

    // Filter by Search Query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        (c.credentialId && c.credentialId.toLowerCase().includes(q)) ||
        (c.category && c.category.toLowerCase().includes(q))
      );
    }

    // Sort
    return [...list].sort((a, b) => {
      if (this.sortBy === 'recent') {
        const dateA = a.issued || '';
        const dateB = b.issued || '';
        return dateB.localeCompare(dateA);
      }
      if (this.sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (this.sortBy === 'issuer') {
        return a.issuer.localeCompare(b.issuer);
      }
      return 0;
    });
  }

  get visibleCertificates(): (Certificate | DraftCertificate)[] {
    // If user is searching or has chosen a specific category, show all matching results
    if (this.searchQuery.trim() || this.selectedCategory !== 'All' || this.showAllCertificates) {
      return this.filteredCertificates;
    }
    return this.filteredCertificates.slice(0, this.defaultLimit);
  }

  get totalCertificatesCount(): number {
    return this.allCertificates.length;
  }

  getCategoryCount(cat: string): number {
    if (cat === 'All') {
      return this.allCertificates.length;
    }
    return this.allCertificates.filter(c => c.category === cat).length;
  }

  setCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  toggleShowAll(): void {
    this.showAllCertificates = !this.showAllCertificates;
  }

  isDraft(cert: Certificate | DraftCertificate): boolean {
    return this.draftCertificates.some(d => d.id === cert.id);
  }

  // Owner Mode Actions
  toggleOwnerPrompt(): void {
    if (this.isOwner) {
      if (confirm('Exit Owner Mode?')) {
        this.exitOwnerMode();
      }
    } else {
      this.showPinModal = true;
      this.pinInput = '';
      this.pinError = '';
    }
  }

  verifyPin(): void {
    const validPins = ['shashwat', 'admin', '2026', 'owner'];
    if (validPins.includes(this.pinInput.trim().toLowerCase())) {
      this.isOwner = true;
      this.showPinModal = false;
      this.pinError = '';
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_is_owner', 'true');
      }
    } else {
      this.pinError = 'Incorrect key. Please try again.';
    }
  }

  exitOwnerMode(): void {
    this.isOwner = false;
    this.showPinModal = false;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('portfolio_is_owner');
    }
  }

  // Certificate Removal Provision for Owner Mode
  removeCertificate(cert: Certificate | DraftCertificate, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const isDraft = this.isDraft(cert);
    const confirmMsg = isDraft 
      ? `Remove draft "${cert.name}"?` 
      : `Remove existing certificate "${cert.name}" from your portfolio?`;

    if (confirm(confirmMsg)) {
      if (isDraft) {
        const idx = this.draftCertificates.findIndex(d => d.id === cert.id);
        if (idx !== -1) {
          this.draftCertificates.splice(idx, 1);
          this.saveDraftsToStorage();
        }
      } else {
        if (!this.removedCertificateIds.includes(cert.id)) {
          this.removedCertificateIds.push(cert.id);
          this.saveRemovedToStorage();
        }
      }
    }
  }

  restoreRemovedCertificates(): void {
    if (confirm('Restore all removed certificates back to your catalog?')) {
      this.removedCertificateIds = [];
      this.saveRemovedToStorage();
    }
  }

  saveRemovedToStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_removed_cert_ids', JSON.stringify(this.removedCertificateIds));
    }
  }

  // File Handling
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  handleFile(file: File): void {
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds the 5 MB limit.');
      return;
    }
    this.newCert.pdfFile = file;
    this.newCert.pdfFileName = file.name;
  }

  removeSelectedFile(): void {
    this.newCert.pdfFile = null;
    this.newCert.pdfFileName = '';
  }

  isFormValid(): boolean {
    return !!(
      this.newCert.name.trim() &&
      this.newCert.issuer.trim() &&
      this.newCert.verifyUrl.trim()
    );
  }

  addToPreview(): void {
    if (!this.isFormValid()) return;

    const id = this.slugify(this.newCert.name);
    const pdfName = this.newCert.pdfFile ? `${id}.pdf` : '';
    const pdfUrl = this.newCert.pdfFile ? URL.createObjectURL(this.newCert.pdfFile) : '';

    const draft: DraftCertificate = {
      id,
      name: this.newCert.name.trim(),
      issuer: this.newCert.issuer.trim(),
      category: this.newCert.category,
      verifyUrl: this.newCert.verifyUrl.trim(),
      issued: this.newCert.issued.trim(),
      credentialId: this.newCert.credentialId.trim(),
      pdf: pdfName,
      pdfFile: this.newCert.pdfFile || undefined,
      pdfUrl: pdfUrl || undefined
    };

    this.draftCertificates.unshift(draft);
    this.saveDraftsToStorage();

    // Reset Form
    this.newCert = {
      name: '',
      issuer: '',
      category: 'Resilience & BCDR',
      issued: '',
      credentialId: '',
      verifyUrl: '',
      pdfFile: null,
      pdfFileName: ''
    };
  }

  previewPdf(cert: Certificate | DraftCertificate): void {
    const draft = cert as DraftCertificate;
    if (draft.pdfUrl) {
      window.open(draft.pdfUrl, '_blank');
    } else if (cert.pdf) {
      window.open(`certificates/${cert.pdf}`, '_blank');
    }
  }

  downloadPdf(draft: DraftCertificate): void {
    if (draft.pdfUrl) {
      const a = document.createElement('a');
      a.href = draft.pdfUrl;
      a.download = draft.pdf || `${draft.id}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  removeDraft(index: number): void {
    this.draftCertificates.splice(index, 1);
    this.saveDraftsToStorage();
  }

  saveDraftsToStorage(): void {
    if (typeof window !== 'undefined') {
      const serializable = this.draftCertificates.map(d => ({
        id: d.id,
        name: d.name,
        issuer: d.issuer,
        category: d.category,
        verifyUrl: d.verifyUrl,
        issued: d.issued,
        credentialId: d.credentialId,
        pdf: d.pdf
      }));
      localStorage.setItem('portfolio_draft_certs', JSON.stringify(serializable));
    }
  }

  // Returns full updated array for src/app/data/certificates.ts (with newly added & removed excluded)
  getFormattedJson(): string {
    const list = this.allCertificates.map(d => ({
      id: d.id,
      name: d.name,
      issuer: d.issuer,
      category: d.category,
      verifyUrl: d.verifyUrl,
      issued: d.issued || '',
      credentialId: d.credentialId || '',
      pdf: d.pdf || ''
    }));
    return JSON.stringify(list, null, 2);
  }

  async copyEntries(): Promise<void> {
    const json = this.getFormattedJson();
    try {
      await navigator.clipboard.writeText(json);
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2500);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
}
