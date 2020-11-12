import { CharactersSimpleService } from 'src/app/shared/services/characters-simple.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() filterEmmitter = new EventEmitter;

  formGroupSearchForm: FormGroup = null;
  character;
  constructor(private formBuilder: FormBuilder, private characterSimpleService: CharactersSimpleService) {}

  ngOnInit(): void {
    this.formGroupSearchForm = this.formBuilder.group({

      name: ['', [Validators.required]],
      });
    }

    saveForm(){

      console.log(this.formGroupSearchForm.value);
    }
    filter(){
      this.filterEmmitter.emit(this.formGroupSearchForm.value);
    }

  }

