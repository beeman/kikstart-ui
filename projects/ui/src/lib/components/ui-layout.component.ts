import { Component, Input } from '@angular/core'
import { UiLayout } from '../interfaces/ui-layout'

@Component({
  selector: 'ui-layout',
  template: `
    <ui-header
      [brand]="config?.brand"
      [links]="config?.header?.links"
      [fluid]="config?.header?.fluid || false"
      [style]="config?.header?.style"
    >
    </ui-header>
    <ui-content [fluid]="config?.content?.fluid" [padding]="config?.content?.padding || true">
      <ng-content></ng-content>
    </ui-content>
    <div class="my-md-5 my-3">
      <ui-footer [html]="config?.footer?.html" [links]="config?.footer?.links"></ui-footer>
    </div>
  `,
})
export class UiLayoutComponent {
  @Input() config: UiLayout
}
