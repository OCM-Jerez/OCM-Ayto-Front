import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BtnCellRenderer } from '../../../commons/ag-grid/button-cell-renderer/button-cell-renderer';
import localeTextESPes from '../../../commons/ag-grid/localeTextESPes.json';
import { IPrograma } from '../programas-page/programas.interface';
import { EconomicoGasto } from './economicos-gastos.interface';
import { EconomicosGastosService } from './economicos-gastos.service';


@Component({
  selector: 'app-economicos-gastos',
  templateUrl: './economicos-gastos.component.html',
  styleUrls: ['./economicos-gastos.component.scss']
})
export class EconomicosGastosComponent implements OnInit {
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
  data$: Observable<EconomicoGasto[]>;
  programa: IPrograma;
  frameworkComponents: { btnCellRenderer: typeof BtnCellRenderer; };

  constructor(
    private economicosGastosService: EconomicosGastosService,
    private router: Router,
  ) {
    this.columnDefs = [
      {
        headerName: 'codEco',
        field: 'codEco',
        width: 80,
        // cellRenderer: CellRendererOCM,
      },
      {
        headerName: 'Descripcion',
        field: 'descripcionOCM',
        width: 500,
      },
      {
        headerName: 'Observaciones',
        field: 'observaciones',
        width: 500,
      },
      {
        headerName: 'WEB OCM',
        field: 'WebOCM',
        width: 300,
      },
      {
        width: 40,
        cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          value: 'Ver',
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          }
        }
      },
      {
        width: 40,
        cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          value: 'Editar',
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          }
        }
      },
      {
        width: 40,
        cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          value: 'Borrar',
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          }
        }
      },
    ];

    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer
    };

    this.defaultColDef = {
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

    this.data$ = this.economicosGastosService.getEcoGasto();
    this.rowData = this.data$;
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
