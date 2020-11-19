import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] =[];
  items: Item[];
  total: number = 0;
  msg: string;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit(): void {

   
   
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
     // console.log("id of item in cart is.." + id);
			if (id) {
				var cartItem: CartItem = {
					item: this.itemService.find(id), 
					quantity: 1
        };
        console.log("cartitem is "+ cartItem.item._id + cartItem.quantity)

				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(cartItem));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let cartItem: CartItem = JSON.parse(cart[i]);
						if (cartItem.item?._id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(cartItem));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let cartItem: CartItem = JSON.parse(cart[index]);
						cartItem.quantity += 1;
						cart[index] = JSON.stringify(cartItem);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});

  }

  loadCart(): void {
		this.total = 0;
		this.cartItems = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let cartItem = JSON.parse(cart[i]);
			this.cartItems.push({
				item: cartItem.item,
				quantity: cartItem.quantity
			});
			this.total += cartItem.item?.price * cartItem.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let cartItem: CartItem = JSON.parse(cart[i]);
			if (cartItem.item?._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}
	cartInfo:any;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		this.cartInfo= cart;
    this.msg="Your have successfully completed your order.Your order is being processed";
     localStorage.clear();
	}

}
