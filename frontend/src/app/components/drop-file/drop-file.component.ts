import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ImageUploadService} from '../../services/image-upload.service';

@Component({
  selector: 'app-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.css']
})
export class DropFileComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private http: HttpClient, private  UploadService: ImageUploadService) { }

  title = 'dropzone';
  files: File[] = [];


  onSelect(event) {
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }
    this.UploadService.fileImport = this.files;
}

onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
}


}
