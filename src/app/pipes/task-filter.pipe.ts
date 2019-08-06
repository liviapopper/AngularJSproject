import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task'
@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], searchText: string): Task[] {
    if (!tasks) return [];
    if (!searchText) return tasks;
    searchText = searchText.toLowerCase();
    return tasks.filter(      
      t => {
        return t.name.toLowerCase().indexOf(searchText)!==-1;
      }
    );
  }
}