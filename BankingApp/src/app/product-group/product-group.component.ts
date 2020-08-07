import { Component, OnInit } from '@angular/core';
import { ApiDataService} from '../service/api-data.service'

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {

  constructor(public apiData :ApiDataService) { }
  data:any;
  ngOnInit(): void {

    this.apiData.getProductGroups().subscribe((data)=>{
      console.log(data);
      this.data = data;
    });
  }

}

