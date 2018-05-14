import { getAllHolidays, getHoliday } from "./index";

// America/Bogota
const timeOffset = "-05:00";

const times = ["T00:00:00.000", "T12:00:00.000", "T23:59:59.999"];

describe("get the name of a given holiday date", () => {
  const holidayCases = [
    { date: "2017-04-12", name: "" },
    { date: "2017-04-13", name: "Jueves Santo" },
    { date: "2014-04-18", name: "Viernes Santo" },
    { date: "2017-05-29", name: "Ascensión de Jesús" },
    { date: "2010-05-17", name: "Ascensión de Jesús" },
    { date: "2011-06-27", name: "Corpus Christi" },
    { date: "2016-06-06", name: "Sagrado Corazón de Jesús" },
    { date: "2017-04-15", name: "" },
    { date: "1937-01-01", name: "Año Nuevo" },
    { date: "1927-12-31", name: "" },
    { date: "2013-01-07", name: "Reyes Magos" },
    { date: "2018-01-08", name: "Reyes Magos" },
    { date: "2025-12-25", name: "Navidad" },
    { date: "1927-12-24", name: "" },
    { date: "2017-03-13", name: "" },
    { date: "2017-01-09", name: "Reyes Magos" },
    { date: "2014-01-06", name: "Reyes Magos" },
    { date: "2011-08-15", name: "Asunción de la Virgen" },
    { date: "2013-11-11", name: "Independencia de Cartagena" },
    { date: "2018-11-05", name: "Todos los Santos" },
    { date: "2013-10-14", name: "Día de la Raza" },
    { date: "2015-10-12", name: "Día de la Raza" },
    { date: "2010-10-18", name: "Día de la Raza" }
  ];
  holidayCases.forEach(holiday => {
    it(`should return '${holiday.name}' for ${holiday.date}`, () => {
      times.forEach(time => {
        const date = new Date(holiday.date + time + timeOffset);
        expect(getHoliday(date)).toBe(holiday.name);
      });
    });
  });
});

describe("Gets all holidays for a given year", () => {
  const holidaysYears = [2010, 2012, 2015, 2018];
  holidaysYears.forEach(holidaysYear => {
    it(`Should return holidays for ${holidaysYear}`, () => {
      expect.addSnapshotSerializer({
        test: val => val.date && val.type && val.name,
        print: val =>
          `{ date: '${val.date}', type: '${val.type}', name: '${val.name}' }`
      });
      expect(getAllHolidays(holidaysYear).length).toEqual(18);
      expect(getAllHolidays(holidaysYear)).toMatchSnapshot();
    });
  });
});
