import { XQuery } from './xQuery';
const $ = (queryParam) => new XQuery(queryParam);
console.log($('.container').find('#div1').find('div').children().addClass('red'));
