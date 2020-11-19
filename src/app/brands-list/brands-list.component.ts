import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {

  brands: Brand[];
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();

  }

  getBrands() {
    return this.brandService.getBrands()
      .subscribe(
        result => {
          this.brands = result;
          
        }
      );
  }

}
