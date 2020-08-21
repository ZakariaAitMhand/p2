import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})



export class ImageUploadService {
  fileImport:File[];
  folderImport:string;
  imageCollection:string[] = [];

  createFolderAndUploadImages(file, foldername:string){     

    foldername = Date.now().toString() + foldername;
    this.folderImport = foldername;
    let newFileName:string = file.name;
    newFileName = Date.now().toString() + newFileName;
    //console.log(foldername + "/" + newFileName);

    //console.log("checking file name" + newFileName);
    this.imageCollection.push(foldername + "/" + newFileName);

    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: environment.myAccessId,
              secretAccessKey: environment.mySecretkey,
              region: 'us-east-1',
          }
      );
      const params = {
          Bucket: 'project-p2',
          Key: `${foldername}/`+ newFileName,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
  }
}
