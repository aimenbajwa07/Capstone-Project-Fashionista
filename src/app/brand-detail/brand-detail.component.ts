import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  id: any;
  brand1: Brand = new Brand();
  constructor(private _brandService: BrandService,
    private _route: ActivatedRoute, private _router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    this._brandService.getBrandById(this.id).subscribe(result => {
      this.brand1 = result;
      console.log("inside details this is brand" + this.brand1);
    })
  }

  deleteBrandById(id: any) {
    this._brandService.deleteBrandById(id).subscribe((result) => {
      console.log('Company Deleted Successfully..')
      this._location.back();
    })
  }

  goBack(): void {
    this._location.back();
  }

}
