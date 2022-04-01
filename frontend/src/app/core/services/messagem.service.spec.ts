import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';

import { MessagemService, TipoMensagem } from './messagem.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MessagemService', () => {
  let service: MessagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, BrowserAnimationsModule],
    });
    service = TestBed.inject(MessagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('>> open | ', () => {
    it('#TipoMensagem.SUCCESS', () => {
      service.open('teste', TipoMensagem.SUCCESS);
      expect(service).toBeTruthy();
    });
    it('#TipoMensagem.ERROR', () => {
      service.open('teste', TipoMensagem.ERROR);
      expect(service).toBeTruthy();
    });
    it('#TipoMensagem.INFO', () => {
      service.open('teste', TipoMensagem.INFO);
      expect(service).toBeTruthy();
    });
    it('#TipoMensagem.WARN', () => {
      service.open('teste', TipoMensagem.WARN);
      expect(service).toBeTruthy();
    });
  });
});
