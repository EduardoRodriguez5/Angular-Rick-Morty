import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriorityNamePipe } from './pipes/priority-name.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { PriorityNamePlusPipe } from './pipes/priority-name-plus.pipe';

@NgModule({
  declarations: [GalleryComponent, PaginationComponent, MenuComponent, PriorityNamePipe, SearchFormComponent, PriorityNamePlusPipe],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [GalleryComponent, PaginationComponent, MenuComponent, SearchFormComponent]
})
export class SharedModule {}
