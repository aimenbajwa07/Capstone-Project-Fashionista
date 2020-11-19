import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../models/brand';
import { Item } from '../models/item';
import { BrandService } from '../services/brand.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id: any;
  item: Item = new Item();
  brands: Brand[];
  itemForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private itemService: ItemService,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(this.id).subscribe(result => {
      this.item = result;
      console.log(this.item);
    });
    this.brandService.getBrands().subscribe(result => {
      this.brands = result;
      console.log(this.brands)
    })
    this.itemForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required]
    });
  }

  get f() {
    return this.itemForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.itemForm.invalid) {
      return;
    } else {
      console.log(this.item)
      this.itemService.updateItemById(this.item, this.id).subscribe(result => {
        console.log("Item Updated Successfully.");
        this.router.navigate(["/items-list"]);
      }, (err) => { console.log(err) })
    }
  }

  goBack() {
    this.location.back();
  }

}
