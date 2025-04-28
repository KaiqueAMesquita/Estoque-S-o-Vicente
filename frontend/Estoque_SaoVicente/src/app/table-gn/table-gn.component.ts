import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-gn',
  imports: [CommonModule],
  templateUrl: './table-gn.component.html',
  styleUrls: ['./table-gn.component.css']
})
export class TableGnComponent<T> {
    @Input() data: T[] = []; //Array da tabela de tipo T
    @Input() column: { key: keyof T, label: string, }[] = []; //Definir Colunas  
}
