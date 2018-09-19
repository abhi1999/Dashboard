import FilterDescriptor from "../constants/params/filterDescriptor";
import KeyValueLabel from "../constants/params/keyValueLabel";
import { IsNotNull } from "./Conversion"

export const kAll = 'All';
export const kTrue = 'True';
export const kFalse = 'False';

export function objectEquals(x, y) {
  'use strict';

  if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) { return false; }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) { return x === y; }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) { return x === y; }
  if (x === y || x.valueOf() === y.valueOf()) { return true; }
  if (Array.isArray(x) && x.length !== y.length) { return false; }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) { return false; }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) { return false; }
  if (!(y instanceof Object)) { return false; }

  // recursive object equality check
  const p = Object.keys(x);
  return Object.keys(y).every((i) => p.indexOf(i) !== -1) &&
    p.every((i) => objectEquals(x[i], y[i]));
}

export function MultiIncludes(text, values) {
  return values.some((value) => {
    return text.includes(value);
  });
}

export function selectGetValue(selectList: KeyValueLabel[], value: any) {
  let result: string = "";

  if (IsNotNull(value)) {
    result = String(value);

    const match: KeyValueLabel[] = selectList.filter((item: KeyValueLabel) => item.value === String(value));

    if (match.length > 0) {
      result = match[0].label;
    }
  }

  return result;
}

export function filterGetValue(filtered: FilterDescriptor[], id: string) {
  let result: any = "";

  const match: FilterDescriptor[] = filtered.filter((f: FilterDescriptor) => f.id === id);

  if (match.length > 0) {
    result = match[0].value;
  }

  return result;
}

export function filterIncludes(filter: FilterDescriptor, row: any) {
  if (typeof(row[filter.id]) === 'number') {
      // string.endsWith is not available in Typescript
      const str = String(filter.value);
      const separatorChar : string = str.substring(filter.value.length-1);

      // TODO: This is US-centric number formatting...

      // See if number separator only
      if (filter.value === '.') { return true; }

      if (separatorChar !== '.') 
      {
        // Convert inbound string to a number so odata doesn't get confused
        filter.value = Number(str);
      }

      // Always return true and do the filtering on the server
      return true; 

  } else {
    // Compare case-insensitive
    const columnValue: string = String(row[filter.id]).toLowerCase();
    const filterValue: string = String(filter.value).toLowerCase();

    if (columnValue.includes(filterValue)) {
      return true;
    }
    else {
      return false;
    }
}
}

export function filterAdd(filtered: FilterDescriptor[], id: string, value: any) {
  // // Remove the current filter for this column if there is one
  // filtered = filtered.filter((column: FilterDescriptor) => column.id !== id)
  filtered = filterClear(filtered, id);

  // If they selected a value, then add the filter back in
  if (typeof(value) === 'boolean') {
    filtered = filtered.concat(new FilterDescriptor({ id, value })) 
  } else if (typeof(value) === 'number') {
    filtered = filtered.concat(new FilterDescriptor({ id, value }))
  } else if (IsNotNull(value) && String(value).length > 0) {
    filtered = filtered.concat(new FilterDescriptor({ id, value }));
  }

  return filtered;
}

export function filterClear(filtered: FilterDescriptor[], id: string) {
    // Remove the current filter for this column if there is one
    return filtered.filter((column: FilterDescriptor) => column.id !== id)
}