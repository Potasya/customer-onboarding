import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export const STORAGE_KEY = 'personalDetails';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  constructor() {}

  savePersonalDetails(form: FormGroup): void {
    const formValue = form.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
  }
}

