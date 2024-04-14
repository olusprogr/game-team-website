import { Injectable } from '@angular/core';

const fs = require('fs');
const folderPath: string = '../assets/cs-map-progress';

function readJSONFiles(folderPath: any): any {
  const files = fs.readdirSync(folderPath); console.log(files)
  const jsonData: any[] = []; console.log(jsonData)
  const jsonFiles = files.filter((file: string) => file.endsWith('.json')); console.log(jsonFiles)
  jsonFiles.forEach((file: string) => {
    const data = fs.readFileSync(`${folderPath}/${file}`); console.log(data)
    jsonData.push(JSON.parse(data)); console.log(jsonData)
  });
  return jsonData;
}

@Injectable({
  providedIn: 'root'
})
export class ProgressServiceService {

  constructor() {
  }

  getProgressData(): any {
    return readJSONFiles(folderPath);
  }
}
