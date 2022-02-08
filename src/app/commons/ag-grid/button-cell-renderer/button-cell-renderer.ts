// https://blog.ag-grid.com/cell-renderers-in-ag-grid-every-different-flavour/#angular

import { Component, OnDestroy } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/lib/interfaces";
import { IAfterGuiAttachedParams, ICellRendererParams } from "ag-grid-community";



@Component({
    selector: "btn-cell-renderer",
    templateUrl: './button-cell-renderer.html',
    styleUrls: ['./button-cell-renderer.scss']
})
export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
    private params: any;

    public value: 'Editar' | 'Ver' | 'Borrar'

    refresh(params: ICellRendererParams): boolean {
        throw new Error("Method not implemented.");
    }
    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        throw new Error("Method not implemented.");
    }

    agInit(params: any): void {
        this.params = params;
        this.value = this.params.value;
    }

    btnClickedHandler(e: any) {
        // this.params.clicked(this.params.value);
        alert("Button clicked: " + this.params.value + e);
    }

    ngOnDestroy() {
        // no need to remove the button click handler
        // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
    }

    getIcon(): string {
        switch (this.value) {
            case 'Editar':
                return 'p.svg'
            default:
                return '';
        }
    }
}
