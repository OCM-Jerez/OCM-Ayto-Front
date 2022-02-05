import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import localeTextESPes from '../../../commons/ag-grid/localeTextESPes.json';
import { IPrograma } from './programas.interface';
import { ProgramaService } from './programas.service';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  private gridApi;
  public gridColumnApi;
  public columnDefs;
  public defaultColDef;
  public gridOptions: GridOptions;
  public localeText;
  public rowData: any;
  public groupHeaderHeight = 25;
  public headerHeight = 25;
  public isExpanded = false;
  public DesCapWidth?: number;
  public DesEcoWidth?: number;
  public CreditosWidth?: number;
  public screenSize?: any;
  columnasWidth = 130;
  programas$: Observable<IPrograma[]>;
  programa: IPrograma;

  constructor(
    private programaService: ProgramaService,
    private router: Router,
  ) {
    this.columnDefs = [
      {
        headerName: 'Código',
        field: 'codPro',
        width: 550,
        // rowGroup: true,
        // filter: false,
        // pinned: 'left',
        // showRowGroup: 'NombreTercero',
        // cellRenderer: 'agGroupCellRenderer',
      },
      {
        headerName: 'Descripcion',
        field: 'descripcionOCM',
        width: 110,
      },
      {
        headerName: 'Observaciones',
        field: 'observaciones',
        width: 100,
      },
      {
        headerName: 'WEB OCM',
        field: 'WebOCM',
        width: 100,
      },

    ];

    this.defaultColDef = {
      width: this.columnasWidth,
      sortable: true,
      resizable: true,
      filter: true,

      headerComponentParams: {
        template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button" ></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation" >' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
          '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
          '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>',
      },

    };

    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = {} as GridOptions;
    this.localeText = localeTextESPes;
  }


  ngOnInit(): void {
    // this.programaService.getProgramas().subscribe(response => {
    //   this.programas$ = of(response);
    //   console.log(this.programas$);
    //   this.rowData = this.programas$;
    // });

    this.programas$ = this.programaService.getProgramas();
    console.log(this.programas$);
    this.rowData = this.programas$;
  }


  async onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.rowData = this.programas$;
    // console.log(this.programas$);

  }

  headerHeightSetter() {
    var padding = 20;
    var height = headerHeightGetter() + padding;
    this.gridApi.setHeaderHeight(height);
    this.gridApi.resetRowHeights();
  }

}

function headerHeightGetter() {
  var columnHeaderTexts = document.querySelectorAll('.ag-header-cell-text');
  var columnHeaderTextsArray: Element[] = [];
  columnHeaderTexts.forEach(node => columnHeaderTextsArray.push(node));
  var clientHeights = columnHeaderTextsArray.map(
    headerText => headerText.clientHeight
  );
  var tallestHeaderTextHeight = Math.max(...clientHeights);
  return tallestHeaderTextHeight;
}

