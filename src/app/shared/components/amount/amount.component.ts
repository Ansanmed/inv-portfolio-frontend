import {
  Component,
  DestroyRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonetaryAmount } from '../../models/monetary-amount';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss',
})
export class AmountComponent implements OnInit, OnDestroy {
  @Input()
  amount: MonetaryAmount | null = null;

  currentLocale = 'en';
  private langChangeSubscription: Subscription;

  destroyRef = inject(DestroyRef);
  constructor(private translocoService: TranslocoService) {
    this.langChangeSubscription = this.translocoService.langChanges$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((lang: string) => {
        this.currentLocale = lang;
      });
  }

  ngOnInit() {
    this.currentLocale = this.translocoService.getActiveLang();
  }

  ngOnDestroy() {
    this.langChangeSubscription.unsubscribe();
  }

  getDecimalPlaces(): string {
    const currency = this.amount?.currency || 'USD';
    switch (currency) {
      case 'JPY':
      case 'KRW':
        return '1.0-0';
      case 'KWD':
        return '1.3-3';
      case 'USD':
      case 'EUR':
      default:
        return '1.2-2';
    }
  }

  getLocale(): string {
    return this.currentLocale;
  }
}
