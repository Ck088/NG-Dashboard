import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.css'],
  standalone: true,
  imports: [NgIf, MatCardModule]
})
export class GraphCardComponent {
  @Input() graph: string;
}
