import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {ElementDataService} from "../element-data.service";

@Component({
  selector: 'app-tabe',
  templateUrl: './tabe.component.html',
  styleUrls: ['./tabe.component.scss']
})
export class TabeComponent implements OnInit {

    ELEMENT_DATA;
    dataSource;

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    @ViewChild(MatSort) sort: MatSort;

    constructor(private elementDataService: ElementDataService){
        this.ELEMENT_DATA = this.elementDataService.ELEMENT_DATA;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    }

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
