import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../data.service';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'table-column-styling-example',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
    standalone: true,
    imports: [MatTableModule],
})
export class TableComponent implements OnInit {
    jsonData: any
    constructor(private configService: ConfigService) { }
    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): void {
        const path = 'books/all'; // Specify the desired path here
        this.configService.getData(path).subscribe(
            (data) => {
                this.jsonData = data;
                console.log(data);
            },
            (error) => {
                console.log('Error:', error);
            }
        );
    }

}



export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
    selector: 'table-column-styling-example',
    styleUrls: ['table-column-styling-example.css'],
    templateUrl: 'table-column-styling-example.html',
    standalone: true,
    imports: [MatTableModule],
})
export class TableColumnStylingExample {
    displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
    dataSource = ELEMENT_DATA;
}

