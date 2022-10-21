import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public paymentTotal!: string;
  public secondsUntilRedirect = 3;
  public paymentIsFinished = false;
  public isLoading = false;
  form = this.fb.group({
    nameOnCard: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expiryDate: ['', Validators.required],
    securityCode: ['', Validators.required],
    zip_postalCode: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.paymentTotal = localStorage.getItem('total') as string;
  }

  onSubmit() {
    console.log(this.form.value)
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.paymentIsFinished = true;
    }, 2000)

    setTimeout(() => {
      setInterval(() => {
        this.secondsUntilRedirect --;
      }, 1000);
    }, 2000)

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
      this.cartService.emptyCart();
      localStorage.setItem('cart', '');
      localStorage.setItem('total', '');
    }, 5000)


    console.log(this.form.value);
  }

}
