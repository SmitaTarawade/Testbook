import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <header>
        <h3>Exam Calendar</h3>
        <p class="no-margin">Get exams date and information about all the exams in Banking and Insurance, SSC & Railways, Engineering and more.</p>
    </header>
    <month
        *ngFor="let month of months"
        title="{{month.month}} {{month.year}}"
        [exams]="month.exams">
    </month>
  </div>
  `
})
export class AppComponent {
  title = 'testbook';
  months: {};
  constructor(private service: GetdataService ) { }

  ngOnInit(): void {
    this.service.getExams()
      .subscribe(
        data => this.months = data,
        error => this.handleError(error)
      );
  }

  handleError(err: Response) {
    if (err) {
      this.months = [
        {
          month: 'January',
          year: 2019,
          exams: [
            {
              name: 'Sbi Prelim',
              startdate: '20 Jan 2019',
              enddate: '28 Jan 2019',
              confirmed: true
            },
            {
              name: 'South India Bank',
              startdate: '20 Jan 2019',
              enddate: '28 Jan 2019',
              confirmed: false
            },
            {
              name: 'Bank of Baroda',
              startdate: '20 Jan 2019',
              enddate: '',
              confirmed: true
            },
            {
              name: 'NABARD',
              startdate: '20 Jan 2019',
              enddate: '28 Jan 2019',
              confirmed: true
            }
          ]
        },
        {
          month: 'February',
          year: 2019,
          exams: [
            {
              name: 'Canara Bank PO',
              startdate: '20 Feb 2019',
              enddate: '28 Feb 2019',
              confirmed: true
            },
            {
              name: 'SBI PO mains',
              startdate: '20 feb 2019',
              enddate: '28 feb 2019',
              confirmed: false
            },
            {
              name: 'L&T',
              startdate: '20 Feb 2019',
              enddate: null,
              confirmed: true
            },
            {
              name: 'SBI PO Prelims',
              startdate: '20 feb 2019',
              enddate: '28 feb 2019',
              confirmed: true
            },
            {
              name: 'Bank of Baroda',
              startdate: '20 feb 2019',
              enddate: '28 feb 2019',
              confirmed: true
            },
            {
              name: 'South India',
              startdate: '20 feb 2019',
              enddate: '28 feb 2019',
              confirmed: false
            }
          ]
        },
        {
          month: 'March',
          year: 2019,
          exams: [
            {
              name: 'L&T',
              startdate: '20 march 2019',
              enddate: '28 March 2019',
              confirmed: true
            },
            {
              name: 'HDFC mains',
              startdate: '20 March 2019',
              enddate: '',
              confirmed: false
            }
          ]
        },
        {
          month: 'April',
          year: 2019,
          exams: [
            {
              name: 'Canara Bank PO',
              startdate: '20 Apr 2019',
              enddate: '28 Apr 2019',
              confirmed: true
            },
            {
              name: 'SBI PO mains',
              startdate: '20 Apr 2019',
              enddate: '28 Apr 2019',
              confirmed: false
            },
            {
              name: 'L&T',
              startdate: '20 Apr 2019',
              enddate: '28 Apr 2019',
              confirmed: true
            },
            {
              name: 'SBI PO Prelims',
              startdate: '20 Apr 2019',
              enddate: '28 Apr 2019',
              confirmed: true
            },
            {
              name: 'Bank of Baroda',
              startdate: '20 Apr 2019',
              enddate: '28 Apr 2019',
              confirmed: true
            },
            {
              name: 'South India',
              startdate: '20 Apr 2019',
              enddate: '28 Apr 2019',
              confirmed: false
            }
          ]
        }
      ];
    }
  }
}
