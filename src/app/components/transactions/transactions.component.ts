import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TransactionCardComponent } from '../shared/transaction-card/transaction-card.component';
import { TransactionStore } from '../../transaction.store';
import { Transaction } from '../../types/transaction';
import { UserStore } from '../../user/user.store';
import User from '../../types/user';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    TransactionCardComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  @ViewChild('transactionFormSubmitButton')
  transactionFormSubmitButtonRef!: ElementRef;
  transactionList: Transaction[] = [];
  transactionService: TransactionStore = inject(TransactionStore);
  transactions$: Observable<Transaction[]> = this.store.state$;
  userService: UserStore = inject(UserStore);
  user$: Observable<User> = this.userStore.state$;
  userProfile: User = { firstName: '', lastName: '', accounts: [], email: '' };
  form = new FormBuilder();
  WITHDRAWAL: string = 'Withdrawal';
  source: string = '';
  transactionForm = this.form.group({
    type: this.WITHDRAWAL,
    source: this.source,
    destination: null,
    amount: ['', [Validators.required, Validators.min(1)]],
    category: ['', Validators.required],
    description: ['', [Validators.required]],
  });
  isLoadingTransactionFormSubmitButton: boolean = false;

  constructor(
    private userStore: UserStore,
    private store: TransactionStore,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    try {
      this.userStore.getProfile();
      this.user$.subscribe((user) => {
        this.userProfile = user;
        this.source = this.userProfile.accounts[0];
      });
      this.store.getAllTransactions();
      this.transactions$.subscribe((transactions) => {
        this.transactionList = this.sortTransactionsByDate(transactions);
      });
    } catch (error: unknown) {
      this.toastr.error('Intente más tarde.', 'El servidor no está disponible');
    } finally {
    }
  }

  async onSubmit() {
    const transactionFormSubmitButton = this.transactionFormSubmitButtonRef
      .nativeElement as HTMLButtonElement;
    if (this.transactionForm.valid) {
      transactionFormSubmitButton.disabled = true;
      this.isLoadingTransactionFormSubmitButton = true;
      this.transactionService
        .createTransaction(this.convertFormToFormData(this.transactionForm))
        .subscribe({
          next: () => {
            this.isLoadingTransactionFormSubmitButton = false;
            this.toastr.success('¡Todo listo!', 'La plata fue enviada');
          },
          error: (error) => {
            this.isLoadingTransactionFormSubmitButton = false;
            transactionFormSubmitButton.disabled = false;
            if (error.status === 400) {
              this.toastr.error('Vuelve a intentar', 'Algo ha salido mal');
            } else if (error.status === 404) {
              this.toastr.error('Vuelve a intentar', 'Recurso no encontrado');
            } else {
              this.toastr.error(
                'Intente más tarde.',
                'El servidor no está disponible'
              );
            }
          },
          complete: () => {
            transactionFormSubmitButton.disabled = false;
            this.isLoadingTransactionFormSubmitButton = false;
          },
        });
    }
  }

  convertFormToFormData(form: FormGroup) {
    const formValue = form.getRawValue();
    return formValue as Transaction;
  }

  sortTransactionsByDate(list: Transaction[]): Transaction[] {
    return list.sort((a: Transaction, b: Transaction): number => {
      return b.date - a.date;
    });
  }
}
