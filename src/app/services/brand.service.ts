import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from "../models/brand";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BrandService {
// URL to web api
private companyUrl = 'http://localhost:5000/api/brands';
constructor(private http: HttpClient) { }

getBrands(): Observable<Brand[]> {
  return this.http.get<Brand[]>(this.companyUrl);
}

getBrandById(id: any): Observable<Brand> {
  return this.http.get<Brand>(`${this.companyUrl}/${id}`);
}

addBrand(brand: Brand): Observable<any> {
  return this.http.post<any>(this.companyUrl, brand, httpOptions);
}


updateBrandById(brand: Brand, id: any): Observable<Brand> {
  return this.http.put<Brand>(`${this.companyUrl}/${id}`, brand, httpOptions);
}


deleteBrandById(id: any): Observable<Brand> {
  return this.http.delete<Brand>(`${this.companyUrl}/${id}`);
}

}
