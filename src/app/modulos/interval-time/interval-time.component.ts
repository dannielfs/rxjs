import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval-time',
  templateUrl: './interval-time.component.html',
})
export class IntervalTimeComponent implements OnInit, OnDestroy {

  @ViewChild('lista', {static: false}) public element: ElementRef;
  @ViewChild('container', {static: false}) public elementPai: ElementRef
  private subsciption: Array<Subscription> = [];

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.iniciarContador();
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.subsciption.forEach((sub)=> {
      console.log(`Unsubscribe ${sub}`);
      sub.unsubscribe
    })
  }

  private iniciarContador() {
    const contador = interval(2000);
    this.subsciption.push(
      contador.subscribe( (n) => {
        const append = this.renderer.createElement('li');
        const text = this.renderer.createText(`Chamou contador ${n}`);
        this.renderer.appendChild(append, text);
        this.renderer.appendChild(this.element.nativeElement, append);
      })
    )
  }

  private iniciarTimer() {
    const timerIinitial = timer(1000);
    const append = this.renderer.createElement('h1');
    const text = this.renderer.createText('Iniciou a pagina com um timer de 1000ms');
    this.renderer.appendChild(append, text);
    this.subsciption.push(
      timerIinitial.subscribe(() => {
        this.renderer.appendChild(this.elementPai.nativeElement,append);
      })
    )
  }



}
