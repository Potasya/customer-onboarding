import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalDetailsService, STORAGE_KEY } from "./personal-details.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetailsForm!: FormGroup;
  showValidationErrors = false;

  constructor(private personalDetailsService: PersonalDetailsService, private router: Router) { }

  ngOnInit(): void {
    const savedData = localStorage.getItem(STORAGE_KEY);
    this.personalDetailsForm = new FormGroup({
      gender: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      dobDay: new FormControl(null, [Validators.required]),
      dobMonth: new FormControl(null, [Validators.required]),
      dobYear: new FormControl(null, [Validators.required]),
      nationality: new FormControl(null, [Validators.required])
    });
    if (savedData) {
      const formData = JSON.parse(savedData);
      this.personalDetailsForm.patchValue(formData);
      return;
    }
  }

  @ViewChild('firstNameLabel') firstNameLabel!: ElementRef;
  @ViewChild('lastNameLabel') lastNameLabel!: ElementRef;
  @ViewChild('nationalityLabel') nationalityLabel!: ElementRef;
  @ViewChild('maleRadio') maleRadio!: ElementRef;
  @ViewChild('femaleRadio') femaleRadio!: ElementRef;
  @ViewChild('dobLabel') dobLabel!: ElementRef;

  toggleErrorHighlight(element: ElementRef, condition: boolean) {
    if (condition) {
      element.nativeElement.classList.add('error-highlight');
    } else {
      element.nativeElement.classList.remove('error-highlight');
    }
  }

  highlightEmptyFields() {
    this.toggleErrorHighlight(this.firstNameLabel, !this.personalDetailsForm.get('firstName')?.value);
    this.toggleErrorHighlight(this.lastNameLabel, !this.personalDetailsForm.get('lastName')?.value);

    const genderEmpty = !this.personalDetailsForm.get('gender')?.value;
    this.toggleErrorHighlight(this.maleRadio, genderEmpty);
    this.toggleErrorHighlight(this.femaleRadio, genderEmpty);

    this.toggleErrorHighlight(this.nationalityLabel, !this.personalDetailsForm.get('nationality')?.value);

    const dayEmpty = !this.personalDetailsForm.get('dobDay')?.value;
    const monthEmpty = !this.personalDetailsForm.get('dobMonth')?.value;
    const yearEmpty = !this.personalDetailsForm.get('dobYear')?.value;

    this.toggleErrorHighlight(this.dobLabel, dayEmpty || monthEmpty || yearEmpty);
  }

  onComplete(): void {
    this.highlightEmptyFields();
    if (this.personalDetailsForm.invalid) {
      this.showValidationErrors = true;
      return;
    }
    this.showValidationErrors = false;
    // Save form data to local storage
    this.personalDetailsService.savePersonalDetails(this.personalDetailsForm);
    this.router.navigate(['/strategy']);
  }
}
