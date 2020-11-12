import { Component, OnInit } from '@angular/core';
import { CharactersSimpleService } from 'src/app/shared/services/characters-simple.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-detail-simple-page',
  templateUrl: './character-detail-simple-page.component.html',
  styleUrls: ['./character-detail-simple-page.component.scss']
})
export class CharacterDetailSimplePageComponent implements OnInit {

  character;

  
  constructor(private route: ActivatedRoute, private charactersSimpleService: CharactersSimpleService) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe(params => {
      const idCharacter = params.get('idCharacter');
      this.charactersSimpleService.getDataId(idCharacter).subscribe((res: any) => {
      this.character = res;
      });
    });
  }
}
