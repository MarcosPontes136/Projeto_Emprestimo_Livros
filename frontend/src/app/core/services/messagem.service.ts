import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export enum TipoMensagem {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class MessagemService {
  private config: MatSnackBarConfig;

  constructor(private snackbar: MatSnackBar, private zone: NgZone) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ['snackbar-container'];
    this.config.verticalPosition = 'top';
    this.config.horizontalPosition = 'right';
    this.config.duration = 400000;
  }

  open(message: string, tipo: TipoMensagem) {
    switch (tipo.toLocaleLowerCase()) {
      case 'success':
        this.success(message);
        break;
      case 'error':
        this.error(message);
        break;
      case 'warn':
        this.warn(message);
        break;
      default:
        this.info(message);
        break;
    }
  }
  error(message: string) {
    this.config.panelClass = ['snackbar-container', 'error'];
    this.show(message);
  }

  success(message: string) {
    this.config.panelClass = ['snackbar-container', 'success'];
    this.show(message);
  }

  warn(message: string) {
    this.config.panelClass = ['snackbar-container', 'warn'];
    this.show(message);
  }

  info(message: string) {
    this.config.panelClass = ['snackbar-container', 'info'];
    this.show(message);
  }

  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      this.snackbar.open(message, 'x', config);
    });
  }
}
