import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { ThemeService } from '../../services/theme.service';
import {DxSwitchModule} from "devextreme-angular";
import {ValueChangedEvent} from "devextreme/ui/switch";

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxSwitchModule,
  ],
  templateUrl: 'theme-selector.html',
})
export class ThemeSelector implements OnInit {
  private readonly themeSvc = inject(ThemeService);
  protected isDarkTheme= signal(false)

  ngOnInit() {
    this.setBaseTheme();
  }

  onValueChanged(e: ValueChangedEvent) {
    this.isDarkTheme.set(e.value)
    this.themeSvc.applyTheme(e.value === true ? "purple.dark" : "purple.light")
  }

  private setBaseTheme() {
    const theme = this.themeSvc.getTheme();
    this.isDarkTheme.set(theme === "purple.dark");
    this.themeSvc.applyTheme(theme);
  }
}