import { Component,  ElementRef, ViewChild,  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {
  title = 'app';
  public columns = ['nick', 'tom','thomas','hamsa','helen'];
  const length: number = this.columns.length;
  @ViewChild('element') elementView;
  @ViewChild('tableToMeasure') elementView2;

    constructor() {
    }

    ngAfterViewInit() {
        const sample = this.elementView.nativeElement.offsetWidth;
        const sample2 = this.elementView2.nativeElement.offsetWidth;
        if (sample2 < sample) {
          let dest = sample2 / length;
          console.log(dest);
        }
    }
  }
}

