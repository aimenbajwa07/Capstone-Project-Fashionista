import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from "../models/item";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[]=[];
  private companyUrl = 'http://localhost:5000/api/items';
  constructor(private http: HttpClient) { }

  
getItems(): Observable<Item[]> {
  return this.http.get<Item[]>(this.companyUrl);
}

getItemById(id: any): Observable<Item> {
  return this.http.get<Item>(`${this.companyUrl}/${id}`);
}

addItem(item: Item): Observable<any> {
  return this.http.post<any>(this.companyUrl, item, httpOptions);
}


updateItemById(item: Item, id: any): Observable<Item> {
  return this.http.put<Item>(`${this.companyUrl}/${id}`, item, httpOptions);
}


deleteItemById(id: any): Observable<Item> {
  return this.http.delete<Item>(`${this.companyUrl}/${id}`);
}

/*
findAll(): Item[] {
  this.getItems().subscribe(result => {
    this.items = result;
    console.log("in service" + this.items);
  })
  return this.items;
}
*/

find(id: string): Item {
  this.getItems().subscribe(result => {
    this.items = result;
    console.log(this.items);
  })
  console.log("inside itemservice find method id is.." + id)
  return this.items[this.getSelectedIndex(id)];  /////////////////
}

private getSelectedIndex(id: string) {
  this.getItems().subscribe(result => {
    this.items = result;
    console.log(this.items);
  })
  console.log("inside getSelectedIndex...id is.." + id)
  for (var i = 0; i < this.items.length; i++) {   //////////////////
      if (this.items[i]._id == id) {
          return i;
      }
  }
  return -1;
}
}
