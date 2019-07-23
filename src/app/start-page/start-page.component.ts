import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ComponentPortal} from "@angular/cdk/portal";
import {TabeComponent} from "../tabe/tabe.component";
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }




  showTabe() {

    let config = new OverlayConfig();


    config.positionStrategy = this.overlay.position().global().centerHorizontally();


    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
        overlayRef.dispose();
    });

    overlayRef.keydownEvents().subscribe((evt) => {
      if(evt.key === 'Escape'){
          overlayRef.dispose();
      }
    });

    overlayRef.attach(new ComponentPortal(TabeComponent, this.viewContainerRef));
  }
}
