import {Component} from '@angular/core';
import {FormGroupTyped, TSFormBuilder} from 'angular-type-safe-form';
import {Validators} from '@angular/forms';

interface AddressFormInterface {
  city: string;
  street: string;
  plz: string;
  country: 'CH' | 'DE' | 'AT';
}

export interface UserFormInterface {
  firstName: string;
  lastName: string;
  address: AddressFormInterface;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'type-safe-demo';
  private userForm: FormGroupTyped<UserFormInterface>;


  constructor(
    private tsFormBuilder: TSFormBuilder
  ) {
    this.tsFormBuilder.group<Partial<UserFormInterface>>(
      {
        address: this.tsFormBuilder.group<AddressFormInterface>({
          street: [null],
          city: [null, Validators.required],
          country: [null],
          plz: [null, Validators.maxLength(6)]
        })
      }
    );

    this.userForm.getSafe(x => x.address.street).patchValue('Kuchenweg 12');
  }
}
