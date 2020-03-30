import { Component, OnInit, ViewChild, ElementRef, ViewChildren, Renderer2 } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-time',
  templateUrl: './interval-time.component.html',
  styleUrls: ['./interval-time.component.scss']
})
export class IntervalTimeComponent implements OnInit {

  @ViewChild('lista', {static: false}) public element: ElementRef;
  @ViewChild('container', {static: false}) public elementPai: ElementRef

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    this.iniciarContador();
    this.iniciarTimer();
  }

  private iniciarContador() {
    const contador = interval(2000);
    contador.subscribe( (n) => {
      const append = this.renderer.createElement('li');
      const text = this.renderer.createText(`Chamou contador ${n}`);
      this.renderer.appendChild(append, text);
      this.renderer.appendChild(this.element.nativeElement, append);
    })
  }

  private iniciarTimer() {
    const timerIinitial = timer(1000);
    const append = this.renderer.createElement('h1');
    const text = this.renderer.createText('Iniciou a pagina com um timer de 1000ms');
    this.renderer.appendChild(append, text);
    timerIinitial.subscribe(() => {
      this.renderer.appendChild(this.elementPai.nativeElement,append);
    })
  }

}
