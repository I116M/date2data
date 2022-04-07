class DateTodata {
    constructor(getMonthly) {
        const getLastDate = (year, month) => {
            return new Date(year, month, 0).toLocaleString().split(".")[2];
        };
        this.getMonthly = (selectYear, selectMonth) => {
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
                    dateObj.push({
                        year: selectYear,
                        month: selectMonth,
                        date: i,
                        format: `${selectYear}-${selectMonth}-${i}`,
                    });
                }
            }
            return dateObj;
        };
    }
}

export default new DateTodata();
