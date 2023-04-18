import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  // Change view
  isVisible: boolean = true;
  iconHoverChangeForm: any;

  // Send "isVisible" from component Page Header to companies Component  
  @Output() isvisibleData: EventEmitter<boolean> = new EventEmitter();

  // Recieve "Title and Subtitel" to Child component Page Header
  @Input() title !: string;
  @Input() subTitleA !: string;
  @Input() subTitleB !: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.iconHoverChangeForm = "Details Table";
  }
  // function close Btn
  close() {
    this.router.navigate(['/dashboard'])
  }
  // function change the view
  changeForm() {
    if (this.isVisible) {
      this.isVisible = false;
      this.isvisibleData.emit(this.isVisible);
      this.iconHoverChangeForm = "Show Grid Table";
    }
    else {
      this.isVisible = true;
      this.isvisibleData.emit(this.isVisible);
      this.iconHoverChangeForm = "Show Details Table";
    }
  }
}
