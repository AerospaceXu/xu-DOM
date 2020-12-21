import { QueryParam } from './types/QueryParam';

import { XQuery } from './xQuery';

const $ = (queryParam: QueryParam) => new XQuery(queryParam);

console.log(
  $('.container').find('#div1').find('div').children().addClass('red'),
);
