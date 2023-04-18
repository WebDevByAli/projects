import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {
  value = 'Zoek naar klanten, onderdelen, documenten en meer';
  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }
  logout() {
    localStorage.setItem("name", "");
    this.router.navigate(["login"]);
  }
  navToAddresses() {
    this.router.navigate(["dashboard/addresses"]);
  }
  navToCompanies() {
    this.router.navigate(["dashboard/companies"]);
  }
  navToItemGroups() {
    this.router.navigate(["dashboard/itemGroups"]);
  }
}
