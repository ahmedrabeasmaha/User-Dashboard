import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    else if (!searchText) {
      return items;
    }
    return this.searchItems(items, searchText.toLowerCase());
  }

  private searchItems(items: any[], searchText: string): any[] {
    let results: any[] = [];
    items.forEach(item => {
      if (item.id == searchText) {
        results.push(item);
      }
    });
    return results;
  }
}
