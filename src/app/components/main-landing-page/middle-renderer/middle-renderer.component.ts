import { Component } from '@angular/core';
import { LoadersService } from "../../../services/loaders/loaders.service";

@Component({
  selector: 'app-middle-renderer',
  templateUrl: './middle-renderer.component.html',
  styleUrl: './middle-renderer.component.css'
})
export class MiddleRendererComponent {
  constructor(public loaderService: LoadersService) { }
}
