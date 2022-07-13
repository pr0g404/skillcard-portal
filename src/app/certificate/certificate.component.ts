import { Component, Input } from '@angular/core';
import { Certificate } from '../../shared/Certificate';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
})
export class CertificateComponent {
  @Input() certificate: Certificate;
  title: string;
  date: string;

  onChange() {
    this.certificate.title = this.title;
    this.certificate.date = this.date;
  }
}

