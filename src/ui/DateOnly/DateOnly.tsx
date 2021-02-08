import React, {
  useState, FC, ChangeEvent, useEffect,
} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DatePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core';

import set from 'date-fns/set';
import isValid from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import isFuture from 'date-fns/isFuture';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
import format from 'date-fns/format';

import clsx from 'clsx';
import { DateMask } from './DateMask';
import useStyles, { materialTheme } from './styles';
import { IProps } from './types';

const DateOnly: FC<IProps> = ({
  onAccept,
  date,
  id,
  placeholder,
  minDate,
  maxDate,
  className,
  disableFuture = true,
  disabled,
}) => {
  const classes = useStyles();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [error, setError] = useState(false);

  const [calendarValue, setCalendarValue] = useState<Date | undefined>(date);
  const [dateValue, setDateValue] = useState<string | undefined>(date ? format(date, 'yyyy/MM/dd') : date);

  useEffect(() => {
    setCalendarValue(date);
    setDateValue(date ? format(date, 'yyyy/MM/dd') : date);
  }, [date]);

  return (
    <>
      <FormControl variant="filled" size="small" className={clsx(classes.select, className)} error={error} disabled={disabled}>
        <InputLabel shrink htmlFor={id}>{placeholder || 'Date'}</InputLabel>
        <FilledInput
          disabled={disabled}
          value={dateValue}
          onChange={handleDateChangeInput}
          name="date"
          id={id}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          inputComponent={DateMask as any}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton size="small" className={classes.selectBtn} onClick={handleCalendar(true)} disabled={disabled}>
                <ArrowDropDownIcon />
              </IconButton>
            </InputAdornment>
          )}
        />
      </FormControl>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          autoOk
          open={openCalendar}
          onChange={() => undefined}
          onAccept={handleAccept}
          className={classes.calendar}
          value={calendarValue}
          disableFuture={disableFuture}
          todayLabel="Today"
          showTodayButton
          minDate={minDate}
          maxDate={maxDate}
          color="secondary"
          onClose={handleCalendar(false)}
        />
      </ThemeProvider>
    </>
  );

  function handleAccept(date: MaterialUiPickersDate) {
    setError(false);
    onAccept(date);
  }

  function handleCalendar(status: boolean) {
    return () => setOpenCalendar(status);
  }

  function handleDateChangeInput({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    const now = new Date();
    const dateParse: Record<string, number | undefined> = {
      year: undefined,
      month: undefined,
      date: undefined,
    };
    const dateObj = {
      year: getYear(now),
      month: getMonth(now),
      date: getDate(now),
    };

    const match = value?.match(/^(\d{4})\/?(\d{2}|\d{1}_|__)?\/?(\d{2}|\d{1}_|__)?$/) || [];

    if (match[1] && match[1] !== '____') {
      dateObj.year = parseInt(match[1], 10);
      dateParse.year = parseInt(match[1], 10);
    }

    if (match[2] && match[2] !== '__' && !isNaN(Number(match[2]))) {
      dateObj.month = parseInt(match[2], 10) - 1;
      dateParse.month = parseInt(match[2], 10) - 1;
    }

    if (match[3] && match[3] !== '__' && !isNaN(Number(match[3]))) {
      dateObj.date = parseInt(match[3], 10);
      dateParse.date = parseInt(match[3], 10);
    }

    const date = new Date(
      dateParse.year as number,
      dateParse.month as number,
      dateParse.date as number,
    );

    setCalendarValue(set(now, dateObj));
    setDateValue(value as string | undefined);

    if (isValid(date) && !Object.values(dateParse).includes(undefined) && isAfter(date, minDate) && !isFuture(date)) {
      setError(false);
      onAccept(date);
    } else if (!value) {
      setError(false);
      onAccept(null);
    } else {
      setError(true);
    }
  }
};

export default DateOnly;
