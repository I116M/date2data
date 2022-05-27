const getLastDate = (year, month) => {
    return new Date(year, month, 0).toLocaleString().split(".")[2];
};
const changeFormat = (num) => {
    if (String(num).length == 1) {
        return "0" + num;
    } else {
        return num;
    }
};

const getMonthlyDate = (selectYear, selectMonth) => {
    const dateObj = new Array();
    if (!selectMonth || !selectYear) {
        const date = new Date();
        for (let i = 1; i <= getLastDate(date.getFullYear(), date.getMonth() + 1); i++) {
            dateObj.push({
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                date: i,
                format: `${date.getFullYear()}-${date.getMonth() + 1}-${i}`,
            });
        }
    } else {
        for (let i = 1; i <= getLastDate(selectYear, selectMonth); i++) {
            let selectedMonthResult, selectedDayResult;

            dateObj.push({
                year: selectYear,
                month: selectMonth,
                date: i,
                format: `${selectYear}-${changeFormat(selectMonth)}-${changeFormat(i)}`,
            });
        }
    }
    return dateObj;
};

const getYearlyDate = (selectYear) => {
    if (selectYear && String(selectYear).length == 4) {
        const date = new Date();

        const lastDataArr = [],
            totalObj = [],
            dateObj = [];

        let i;
        for (i = 1; i <= 12; i++) {
            lastDataArr.push(getLastDate(selectYear, i));
        }

        lastDataArr.forEach((item, idx) => {
            for (let j = 1; j <= Number(item); j++) {
                dateObj.push({
                    year: selectYear,
                    month: idx + 1,
                    date: j,
                    format: `${selectYear}-${idx + 1}-${j}`,
                });
            }
        });

        return dateObj;
    } else if (!selectYear || String(selectYear).length !== 4) {
        console.log("Parameter Error, Year is a required value and only supports four digits.");
    }
};

export {getMonthlyDate, getYearlyDate};
