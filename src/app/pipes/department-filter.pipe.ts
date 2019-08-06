import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log();
    return items.filter(      
      it => {
        return it.name.toLowerCase().indexOf(searchText)!==-1;
      }
    );
  }
}