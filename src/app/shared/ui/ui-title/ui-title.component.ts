import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-title',
  imports: [],
  template: `
  <div class="flex flex-col items-center gap-3 p-4">
    <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold">
      {{title()}}
    </h3>
    <div class="w-[160px] h-[1px] bg-gray-300 relative my-2">
      <div class="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[70px] h-1 bg-success rounded-xl"></div>
    </div>
    @if(subtitle()){
      <p class="text-gray-700">{{subtitle()}}</p>
    }
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTitleComponent {

  public title = input.required<string>();
  public subtitle = input<string>();

}
