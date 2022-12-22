import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToolsPageComponent } from './tools-page.component';

const components = [ToolsPageComponent];
@NgModule({
  declarations: [components],
  imports: [BrowserModule, FormsModule],
  providers: [],
  exports: [components]
})
export class ToolsPageModule {}
