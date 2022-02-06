import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EconomicoGasto } from './economicos-gastos.interface';


@Injectable({ providedIn: 'root' })
export class EconomicosGastosService {
    codEco: string;
    desEco: string

    constructor(private httpClient: HttpClient) { }

    getEcoGasto() {
        return this.httpClient.get<EconomicoGasto[]>('http://localhost:3000/api/v1/economicos')

            .pipe(
                catchError(this.handleError),
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError('ups algo salio mal');
    }

}

