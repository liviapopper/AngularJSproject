import { NgModule } from '@angular/core';
import { MatDatepickerModule, 
        MatNativeDateModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatTableModule,
        MatTabsModule
     } from '@angular/material';

@NgModule({
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule
    ],

    exports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule
    ]
})
export class MaterialModule { }