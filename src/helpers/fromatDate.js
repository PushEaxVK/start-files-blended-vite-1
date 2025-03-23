import { format } from 'date-fns';

const formatDate = date => {
  return format(new Date(date), 'Pp'); //=> '00002017'
};

export default formatDate;
