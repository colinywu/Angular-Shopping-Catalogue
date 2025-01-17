import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  // ngOnInit() {
  //   this.items = this.cartService.getItems();
  // }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn("Your order has been submitted", customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
