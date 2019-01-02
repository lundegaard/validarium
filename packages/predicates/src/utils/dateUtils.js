import { o } from 'ramda';

const deleteHours = date => date.setHours(0, 0, 0, 0);

const makeDate = date => new Date(date);

export const makeDateWithoutHours = o(deleteHours, makeDate);
