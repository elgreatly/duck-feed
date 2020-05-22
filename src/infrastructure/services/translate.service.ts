import { I18nRequestScopeService } from 'nestjs-i18n';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TranslateService {
    constructor(private readonly i18n: I18nRequestScopeService) {
    }

    translate(id: string, options?: any): Promise<any> {
        return this.i18n.translate(id, options);
    }
}
