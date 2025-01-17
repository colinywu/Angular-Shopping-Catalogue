import { Component, OnInit, AfterViewInit } from "@angular/core";
import products from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products = products;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.products);
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}
