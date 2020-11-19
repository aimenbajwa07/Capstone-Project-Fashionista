import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  id: any;
  brand: Brand = new Brand();
  brandForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id is .." + this.id);
    this.brandService.getBrandById(this.id).subscribe(result => {
      this.brand = result;
      console.log("brand is .." + this.brand);
    });
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
      this.brandService.updateBrandById(this.brand, this.id).subscribe(result => {
        console.log("Brand Updated Successfully.");
        this.router.navigate(["/brands-list"]);
      }, (err) => { console.log(err) })
    }
  }

  goBack() {
    this.location.back();
  }

}
