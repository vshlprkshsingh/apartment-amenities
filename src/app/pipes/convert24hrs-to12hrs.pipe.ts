import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'convert24hrsTo12hrs'
})
export class Convert24hrsTo12hrsPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let newStr = '';
		switch (value) {
			case '24:00':
			case '00:00':
				newStr = '12:00 AM'
				break;
			case '24:30':
			case '00:30':
				newStr = '12:30 AM'
				break;
			case '1:00':
			case '01:00':
				newStr = '1:00 AM'
				break;
			case '1:30':
			case '01:30':
				newStr = '1:30 AM'
				break;
			case '2:00':
			case '02:00':
				newStr = '2:00 AM'
				break;
			case '2:30':
			case '02:30':
				newStr = '2:30 AM'
				break;
			case '3:00':
			case '03:00':
				newStr = '3:00 AM'
				break;
			case '3:30':
			case '03:30':
				newStr = '3:30 AM'
				break;
			case '4:00':
			case '04:00':
				newStr = '4:00 AM'
				break;
			case '4:30':
			case '04:30':
				newStr = '4:30 AM'
				break;
			case '5:00':
			case '05:00':
				newStr = '5:00 AM'
				break;
			case '5:30':
			case '05:30':
				newStr = '5:30 AM'
				break;
			case '6:00':
			case '06:00':
				newStr = '6:00 AM'
				break;
			case '6:30':
			case '06:30':
				newStr = '6:30 AM'
				break;
			case '7:00':
			case '07:00':
				newStr = '7:00 AM'
				break;
			case '7:30':
			case '07:30':
				newStr = '7:30 AM'
				break;
			case '8:00':
			case '08:00':
				newStr = '8:00 AM'
				break;
			case '8:30':
			case '08:30':
				newStr = '8:30 AM'
				break;
			case '9:00':
			case '09:00':
				newStr = '9:00 AM'
				break;
			case '9:30':
			case '09:30':
				newStr = '9:30 AM'
				break;
			case '10:00':
				newStr = '10:00 AM'
				break;
			case '10:30':
				newStr = '10:30 AM'
				break;
			case '11:00':
				newStr = '11:00 AM'
				break;
			case '11:30':
				newStr = '11:30 AM'
				break;
			case '12:00':
				newStr = '12:00 PM'
				break;
			case '12:30':
				newStr = '12:30 PM'
				break;
			case '13:00':
				newStr = '1:00 PM'
				break;
			case '13:30':
				newStr = '1:30 PM'
				break;
			case '14:00':
				newStr = '2:00 PM'
				break;
			case '14:30':
				newStr = '2:30 PM'
				break;
			case '15:00':
				newStr = '3:00 PM'
				break;
			case '15:30':
				newStr = '3:30 PM'
				break;
			case '16:00':
				newStr = '4:00 PM'
				break;
			case '16:30':
				newStr = '4:30 PM'
				break;
			case '17:00':
				newStr = '5:00 PM'
				break;
			case '17:30':
				newStr = '5:30 PM'
				break;
			case '18:00':
				newStr = '6:00 PM'
				break;
			case '18:30':
				newStr = '6:30 PM'
				break;
			case '19:00':
				newStr = '7:00 PM'
				break;
			case '19:30':
				newStr = '7:30 PM'
				break;
			case '20:00':
				newStr = '8:00 PM'
				break;
			case '20:30':
				newStr = '8:30 PM'
				break;
			case '21:00':
				newStr = '9:00 PM'
				break;
			case '21:30':
				newStr = '9:30 PM'
				break;
			case '22:00':
				newStr = '10:00 PM'
				break;
			case '22:30':
				newStr = '10:30 PM'
				break;
			case '23:00':
				newStr = '11:00 PM'
				break;
			case '23:30':
				newStr = '11:30 PM'
				break;
			default:
				newStr = value;
		}

		return newStr;
	}

}
