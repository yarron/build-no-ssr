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
import { DateTimePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core';

import set from 'date-fns/set';
import isValid from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import isFuture from 'date-fns/isFuture';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import format from 'date-fns/format';

import { DateTimeMask } from './DateTimeMask';
import useStyles, { materialTheme } from './styles';
import { IProps } from './types';

const DateTime: FC<IProps> = ({ onAccept, date, dateRange }) => {
  const classes = useStyles();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [error, setError] = useState(false);

  const [valueCalendar, setCalendarChange] = useState<Date | undefined>(date);
  const [valueDate, setDateChange] = useState<string | undefined>(format(date, 'yyyy/MM/dd HH:mm'));

  useEffect(() => {
    setCalendarChange(date);
    setDateChange(format(date, 'yyyy/MM/dd HH:mm'));
  }, [date]);

  return (
    <>
      <FormControl variant="filled" size="small" className={classes.select} error={error}>
        <InputLabel shrink htmlFor="filter-date">Date</InputLabel>
        <FilledInput
          value={valueDate}
          onChange={handleDateChangeInput}
          name="date"
          id="filter-date"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          inputComponent={DateTimeMask as any}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton size="small" className={classes.selectBtn} onClick={handleCalendar(true)}>
                <ArrowDropDownIcon />
              </IconButton>
            </InputAdornment>
          )}
        />
      </FormControl>
      <ThemeProvider theme={materialTheme}>
        <DateTimePicker
          autoOk
          open={openCalendar}
          onChange={() => undefined}
          onAccept={handleAccept}
          className={classes.calendar}
          ampm={false}
          value={valueCalendar}
          disableFuture
          todayLabel="Today"
          showTodayButton
          minDate={dateRange[0]}
          maxDate={dateRange[1]}
          color="secondary"
          onClose={handleCalendar(false)}
        />
      </ThemeProvider>
    </>
  );

  function handleAccept(date: MaterialUiPickersDate) {
    setError(false);
    onAccept(date as Date);
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
      hours: undefined,
      minutes: undefined,
    };
    const dateObj = {
      year: getYear(now),
      month: getMonth(now),
      date: getDate(now),
      hours: getHours(now),
      minutes: getMinutes(now),
    };

    const match = value?.match(/^(\d{4})\/?(\d{2}|\d{1}_|__)?\/?(\d{2}|\d{1}_|__)? ?(\d{2}|\d{1}_|__)?:?(\d{2}|\d{1}_|__)?$/) || [];

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

    if (match[4] && match[4] !== '__' && !isNaN(Number(match[4]))) {
      dateObj.hours = parseInt(match[4], 10);
      dateParse.hours = parseInt(match[4], 10);
    }

    if (match[5] && match[5] !== '__' && !isNaN(Number(match[5]))) {
      dateObj.minutes = parseInt(match[5], 10);
      dateParse.minutes = parseInt(match[5], 10);
    }

    const date = new Date(
      dateParse.year as number,
      dateParse.month as number,
      dateParse.date as number,
      dateParse.hours as number,
      dateParse.minutes as number,
    );

    setCalendarChange(set(now, dateObj));
    setDateChange(value as string | undefined);

    if (isValid(date)
      && !Object.values(dateParse).includes(undefined)
      && isAfter(date, dateRange[0]) && !isFuture(date)) {
      setError(false);
      onAccept(date);
    } else if (!value) {
      setError(false);
      onAccept(new Date());
    } else {
      setError(true);
    }
  }
};

export default DateTime;
