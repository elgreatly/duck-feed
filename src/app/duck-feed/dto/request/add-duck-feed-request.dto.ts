import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ErrorMessagesEnum } from '../../../../infrastructure/enums/error-messages.enum';
import { IsDateFormat } from '../../../../infrastructure/custom-validators/is-date-format.validator';
// tslint:disable: variable-name
export class AddDuckFeedRequestDto {

    @IsNotEmpty({ message: ErrorMessagesEnum.required, context: ['translated'] })
    @IsDateFormat('HH:mm', { message: ErrorMessagesEnum.invalidTime, context: ['translated'] })
    fed_time: string;

    @IsNotEmpty({ message: ErrorMessagesEnum.required, context: ['translated'] })
    @IsString({ message: ErrorMessagesEnum.invalidString, context: ['translated'] })
    food: string;

    @IsNotEmpty({ message: ErrorMessagesEnum.required, context: ['translated'] })
    @IsString({ message: ErrorMessagesEnum.invalidString, context: ['translated'] })
    place: string;

    @IsNotEmpty({ message: ErrorMessagesEnum.required, context: ['translated'] })
    @IsNumber({}, { message: ErrorMessagesEnum.invalidString, context: ['translated'] })
    number_of_ducks: number;

    @IsNotEmpty({ message: ErrorMessagesEnum.required, context: ['translated'] })
    @IsString({ message: ErrorMessagesEnum.invalidString, context: ['translated'] })
    food_type: string;

    @IsNotEmpty({ message: ErrorMessagesEnum.required, context: ['translated'] })
    @IsString({ message: ErrorMessagesEnum.invalidString, context: ['translated'] })
    food_weight: string;
}
