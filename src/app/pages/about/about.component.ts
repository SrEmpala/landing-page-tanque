import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Tanque } from 'src/app/Tanque';
import { TanquesService } from 'src/app/tanques.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  tanquesCarrousel: any[] = [
    {
      descricao: 'Leopard 2A5',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Leopard_2_A5_der_Bundeswehr.jpg'
    },
    {
      descricao: 'Challenger 2',
      img: 'https://www.army.mod.uk/media/20911/ddu-188-20230203-estonia-exercise-winter-camp-4124.jpg'
    },
    {
      descricao: 'M1A2 Abrams',
      img: 'https://asc.army.mil/web/wp-content/uploads/2018/10/Abrams_Image_WSH2020.jpg'
    }
  ];

  loading = true;
  responsiveOptions: any[] = [];


  tanques?: Tanque[];

  constructor(private tanqueService: TanquesService) { }

  ngOnInit(): void {
    
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.tanqueService.PegarTodos().pipe(finalize(() => this.loading = false)).subscribe(resultado => this.tanques = resultado);
  }

}
