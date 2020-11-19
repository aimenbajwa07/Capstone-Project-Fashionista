import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { Item } from '../models/item';
import { BrandService } from '../services/brand.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  itemForm: FormGroup;
  submitted = false;
  item: Item = new Item();
  brands: Brand[];

  constructor(private itemService: ItemService,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required]
    });
    this.brandService.getBrands().subscribe(result => {
      this.brands = result;
      console.log(this.brands)
    })
  }

  get f() {
    return this.itemForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.itemForm.invalid) {
      return;
    }

    console.log(this.item)
    this.itemService.addItem(this.item).subscribe(result => {
      console.log("Item Added Successfully.");
      this.router.navigate(["/items-list"]);
    }, (err) => { console.log(err) })

  }

}
