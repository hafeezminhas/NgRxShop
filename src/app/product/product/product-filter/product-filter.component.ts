import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const numberPattern = '^[0-9]*$';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input() filterValue;
  @Output() filterChange = new EventEmitter<{minPrice: number, maxPrice: number}>();

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      minPrice: [this.filterValue.minPrice || 0, [Validators.required, Validators.pattern(numberPattern)]],
      maxPrice: [this.filterValue.maxPrice || 100, [Validators.required, Validators.pattern(numberPattern)]]
    });
  }

  get filterForm(): any {
    return this.form.controls;
  }

  onSubmit(e): void {
    if (this.form.invalid) {
      return;
    }

    this.filterChange.emit(this.form.value);
  }

  resetFilter(): void {
    this.form.controls.minPrice.setValue(0);
    this.form.controls.maxPrice.setValue(0);
    this.filterChange.emit(this.form.value);
  }
}
