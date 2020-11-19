import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandForm: FormGroup;
  submitted = false;
  brand: Brand = new Brand();

  constructor(private formBuilder: FormBuilder,
    private brandService: BrandService,
    private router: Router) { }

  ngOnInit(): void {
    this.brandForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.brandForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.brandForm.invalid) {
      return;
    } else {
      console.log(this.brand)
      this.brandService.addBrand(this.brand).subscribe(result => {
        console.log("Brand Added Successfully.");
        this.router.navigate(["/brands-list"]);
      }, (err) => { console.log(err) })
    }
  }

}
