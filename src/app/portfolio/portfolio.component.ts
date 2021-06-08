import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioImage1: string = "assets/michiApp.png";
  portfolioImage2: string = "assets/bienesRaices.png";
  portfolioImage3: string = "assets/appCommerce.png";
  portfolioImage4: string = "assets/landinPageStore.png";
  portfolioImage5: string = "assets/blogDeCafe.png";
  portfolioImage6: string = "assets/agenciaDigital.png";

  constructor() { }

  ngOnInit(): void {
  }

}
