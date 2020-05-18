import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Product} from './product';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'api/v1/products';

export class ApiService {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('Featch Products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`Featch Product id =${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct(): Observable<Product> {
    return this.http.post<Product>(apiUrl, Product, httpOptions).pipe(
      tap((product: Product) => console.log(`Added Product w/ id =${product.id}`)),
      catchError(this.handleError<Product>(`addProduct`))
    );
  }


  updateProduct(id, product): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.put<Product>(url, product, httpOptions).pipe(
      tap(_ => console.log(`Update Product w/ id =${id}`)),
      catchError(this.handleError<any>(`updateProduct`))
    );
  }

  deleteProduct(id): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete Product w/ id =${id}`)),
      catchError(this.handleError<any>(`deleteProduct`))
    );
  }

}
