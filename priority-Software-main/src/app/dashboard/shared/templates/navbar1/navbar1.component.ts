import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss']
})
export class Navbar1Component implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.setItem("name", "");
    this.router.navigate(["login"]);
  }
  navToAddresses() {
    this.router.navigate(["dashboard/addresses"]);
  }
  navToItemGroups() {
    this.router.navigate(["dashboard/itemGroups"]);
  }
  navToCompanies() {
    this.router.navigate(["dashboard/companies"]);
  }
}
