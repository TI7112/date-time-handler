## DATE-TIME-HANDLER

import { DateHandler } from "@ti7112/date-time-handler";


# Date Utilities Module

This is a simple JavaScript module that provides utility functions for working with dates. It offers two primary functions:
1. DateHandler.now() - Returns the current date and time.
2. DateHandler.detail(bufferDate) - Accepts a specific date as input (in Date format) and returns detailed information about the date, such as the day of the week, the name of the month, the number of days in the month, and the year.
Table of Contents
* Installation
* Usage
o now()
o detail()
* Example
* License
Installation
To use this module, you can either download the file directly or use a package manager like npm or yarn.
If you're including the module directly in your project, save the JavaScript file as date-utils.js (or another name of your choosing) and import it into your code.
For Node.js projects, you can install it by linking the module into your project directory.






Usage
DateHandler.now()
The DateHandler.now() function returns the current date and time as a Date object.
Javascript







DateHandler.detail("Y-m-d")
The DateHandler.detail("Y-m-d") function accepts a Date object or a date string, and returns a detailed object with information about the given date, such as:
* The day of the week (0-6).
* The day name (e.g., "sunday").
* The date of the month (1-31).
* The month number (0-11).
* The month name (e.g., "January").
* The number of days in the month.
* The year.















Parameters for DateHandler.detail():
* bufferDate: A Date object or a date string (e.g., '2024-12-30' or '2024-12-01T00:00:00Z'). If no date is provided, it defaults to the current date.



























Explanation of the Code
* days: An array that contains the names of the days of the week.
* months: An array that contains the names of the months of the year.
* now(): Returns the current Date object representing the current date and time.
* detail("Y-m-d"): Takes a Date object or a date string and returns an object with detailed information about the given date:
o day: The day of the week (from 0 for Sunday to 6 for Saturday).
o dayName: The name of the day (e.g., "sunday", "monday").
o date: The day of the month (1-31).
o month: The index of the month (0-11).
o monthName: The name of the month (e.g., "January", "February").
o noOfDays: The number of days in the specified month.
o year: The year of the provided date.

This module is useful for projects that need to manipulate or display date-related information in a structured format. You can easily extend it by adding more date-related methods or integrating it into larger applications.




