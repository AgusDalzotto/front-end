import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  URL = 'http://localhost:8080/educacion/'
  constructor() { }
}
