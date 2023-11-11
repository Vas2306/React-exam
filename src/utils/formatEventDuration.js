import { formatDistanceStrict } from 'date-fns';

export function formatEventDuration(start, end){
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};