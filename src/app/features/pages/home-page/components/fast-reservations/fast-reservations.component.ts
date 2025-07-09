import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormErrorLabelComponent } from '@shared/components/form-error-label/form-error-label.component';

@Component({
  selector: 'fast-reservations',
  imports: [
    ReactiveFormsModule,
    FormErrorLabelComponent,
  ],
  templateUrl: './fast-reservations.component.html',
  styleUrl: './fast-reservations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FastReservationsComponent {


  private fb = inject(FormBuilder);

  private now = new Date();

  public totalPersons = signal<number>(0);
  public formattedDate = this.now.toLocaleDateString('en-CA');

  public dropdownVisible = signal<boolean>(false);

  public form = this.fb.group({
    activity: ['habitacion', [Validators.required]],
    plannedDate: [this.formattedDate, [Validators.required, this.minDateValidator(this.now)]],
    adults: [0, [Validators.required, Validators.min(1)]],
    children: [0, [Validators.required]]
  });




  public setNumberOfPersons(): void {

    this.dropdownVisible.set(false);

    const adults = this.form.controls.adults.value;
    const children = this.form.controls.children.value;
    if (!adults || !children) return;
    this.totalPersons.set(parseInt(adults.toString()) + parseInt(children.toString()));

  }


  public toggleDropdown(): void {
    this.dropdownVisible.update(value => !value);
    console.log(this.dropdownVisible());
  }

  public submit(): void {

    console.log('isInvalid: ', this.form.invalid);
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }


  minDateValidator(minDate: Date): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // No validar si está vacío (usa Validators.required para eso)
      }

      const controlDate = new Date(control.value);
      if (controlDate < minDate) {
        return { minDate: { requiredDate: minDate.toISOString().split('T')[0] } };
      }

      return null;
    };
  }

}

