import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../models/brand';
import { Item } from '../models/item';
import { BrandService } from '../services/brand.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  id: any;
  item: Item = new Item();
  brands: Brand[];
  brand: Brand = new Brand();

  constructor(private itemService: ItemService,
    private brandService: BrandService,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
 
    this.id = this._route.snapshot.paramMap.get('id');
    this.itemService.getItemById(this.id).subscribe(result => {
      this.item = result;
     this.brandService.getBrandById(this.item[0]?.brand).subscribe((result) => {
        this.brand = result;
        console.log("brand is.." + this.brand);
      })
    });
}

  deleteItemById(id: any) {
    console.log(id);
    this.itemService.deleteItemById(id).subscribe((result) => {
      console.log('Item Deleted Successfully..')
    });
    this._location.back();
  }


  goBack(): void {
    this._location.back();
  }


}
