import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
})
export class FromEventComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('container', {static: false}) public el: ElementRef;

  public text: String;

  private subscriptions: Array<Subscription> = [];

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.checkCoordenadas();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private checkCoordenadas() {
    //const mouseMove = fromEvent(this.el.nativeElement, 'mousemove');
    const el = document.getElementById('box');
    const mouseMove = fromEvent(el, 'mousemove');

    this.subscriptions.push(
      mouseMove.subscribe((res: MouseEvent) => {
        this.text = `${res.clientX}:${res.clientY}`;
      })
    )
  }

}
