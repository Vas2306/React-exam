import { format } from 'date-fns';
export function formatEventStart(start) {
    return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
}