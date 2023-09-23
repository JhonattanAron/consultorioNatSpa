import { Injectable } from '@angular/core';
import { Firestore , collection , addDoc , getDocs } from '@angular/fire/firestore';
import Products from '../interfaces/productos';
import { Observable } from 'rxjs';
import {  } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private firebastore:Firestore,
  ) { }

  addProduct(producto:Products){
    const productRef = collection(this.firebastore , 'Productos');
    return addDoc(productRef , producto);
  }
  async getProducts(){
    let data:any = [];
    const query = await getDocs(collection(this.firebastore , 'Productos'))
    query.forEach((doc) =>{
       data.push(doc.data())
    })
    return data;
  }
}
