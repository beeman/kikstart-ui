import { Component, Input } from '@angular/core'

export type UiAvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

@Component({
  selector: 'ui-avatar',
  template: `
    <img
      [attr.alt]="alt"
      [attr.src]="avatarUrl"
      class="avatar"
      [class.avatar-xs]="size === 'xs'"
      [class.avatar-sm]="size === 'sm'"
      [class.avatar-md]="size === 'md'"
      [class.avatar-lg]="size === 'lg'"
      [class.avatar-xl]="size === 'xl'"
      [class.avatar-xxl]="size === 'xxl'"
      *ngIf="avatarUrl"
    />
  `,
  styles: [
    `
      .avatar {
        border-radius: 50%;
      }
      .avatar-xs {
        height: 24px;
        width: 24px;
      }
      .avatar-sm {
        height: 30px;
        width: 30px;
      }
      .avatar-md {
        height: 48px;
        width: 48px;
      }
      .avatar-lg {
        height: 96px;
        width: 96px;
      }
      .avatar-xl {
        height: 128px;
        width: 128px;
      }
      .avatar-xxl {
        height: 256px;
        width: 256px;
      }
    `,
  ],
})
export class UiAvatarComponent {
  @Input() public alt = 'Avatar'
  @Input() public avatarUrl: string
  @Input() public size: UiAvatarSizes = 'md'
}
