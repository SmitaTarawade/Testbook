import { Component, Input } from '@angular/core';

@Component({
  selector: 'month',
  template: `
  <section class="groups" [class.active]="isExpanded">
  <header class="groups-header" (click)="toggleExpanded()">
      <span class="month-title">{{title}}</span><span class="exam-number">{{exams.length}} exams</span>
      <span *ngIf="isExpanded" class="chevrons">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-up" class="svg-inline--fa fa-chevron-circle-up fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"></path></svg>
      </span>
      <span *ngIf="!isExpanded" class="chevrons">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-down" class="svg-inline--fa fa-chevron-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"></path></svg>
      </span>
  </header>
  <article class="grid-container groups-body" *ngIf="isExpanded">
     <group *ngFor="let exam of exams" class="exam-tile grid-item" [confirmed]="exam.confirmed">
          <ng-container class="exam-name">{{exam.name}}</ng-container>
          <ng-container class="exam-date"><span>{{exam.startdate}}</span> <span *ngIf="exam?.enddate"> - {{exam.enddate}}</span></ng-container>
      </group>
  </article>
</section>
  `
})
export class MonthsComponent {
  @Input('title') title: string;
  @Input('exams') exams;

  isExpanded = false;

  constructor() {}

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

}
