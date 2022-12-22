import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolsPageComponent } from './tools-page.component';

const components = [ToolsPageComponent];
@NgModule({
  declarations: [components],
  imports: [FormsModule],
  providers: [],
  exports: [components]
})
export class ToolsPageModule {}
