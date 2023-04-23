import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CompactType } from 'angular-gridster2';
import { GridType } from 'angular-gridster2';
import {
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent
} from 'angular-gridster2';
import { GraphCardComponent } from '../graph-card/graph-card.component';
import { MatCardActions, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgForOf, GridsterComponent, GridsterItemComponent, GraphCardComponent, MatCardModule],
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
     this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      maxCols: 12,
      minItemCols: 2,
      maxItemCols: 8,
      minItemRows:2,
      maxItemRows: 8,
      displayGrid: "always",
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };


    this.dashboard = [
      { cols: 4, rows: 3, y: 0, x: 0, graph: 'graph_1' },
      { cols: 4, rows: 3, y: 0, x: 2, graph: 'graph_2' },
      { cols: 4, rows: 3, y: 0, x: 4, graph: 'graph_3' },
      { cols: 4, rows: 3, y: 6, x: 8, graph: 'graph_4' },
      { cols: 4, rows: 3, y: 2, x: 2, graph: 'graph_5' },
      { cols: 4, rows: 3, y: 3, x: 4, graph: 'graph_6' },
    ];
  }

}
