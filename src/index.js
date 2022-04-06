import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './main.scss'
import faruk from './Faruk.jpg'
import axios from 'axios';

function getProducts() {

    
    axios.get('http://localhost:5050/products').then(res => {
        let allProductShow = document.querySelector('.allProductShow');
        let listPro = ""
        res.data.map(data =>{

            let {title, price, sellPrice, photo} = data;
            listPro += `
            <div class="col-md-4 mb-4">
            <div class="card mx-auto shadow">
              <img  id="myImage" src="${photo}" class="card-img-top" alt="" style="width: 100%; height: 400px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted ">price : <span class="text-decoration-line-through">${price}</span></h6>
                <h6 class="card-subtitle mb-2 text-muted ">Sell : ${sellPrice}</h6>
              
              </div>
            </div>
        </div>
            `

        })
        allProductShow.innerHTML = listPro;

    })
    
}
getProducts()
