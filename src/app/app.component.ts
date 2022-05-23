import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PdfService } from 'src/services/pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private pdfService: PdfService) {}

  file: any = null;
  title = 'pdf-lector-app';
  fileName: string = '';
  fileResult!: Observable<any>;
  isLoading: boolean = false;
  url = '';

  onHandleFile(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }
  onSubmitFile() {
    console.log('hola');

    this.isLoading = true;
    const formData = new FormData();
    formData.append('pdf-file', this.file);
    this.fileResult = this.pdfService.extractPdf(formData);
    this.fileResult.subscribe((data) => {
      console.log(data);
      setTimeout(() => {
        this.file = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;',
        });
        this.url = URL.createObjectURL(this.file);
        console.log(this.url);
        saveAs(this.file);
        this.isLoading = false;
      }, 500);
    });
  }
}
