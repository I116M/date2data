# date2data
테이블에 날짜별 데이터 넣을 때마다 새로 객체 만들어서 작업하기가 매우 귀찮아서 만들었다. moment.js를 쓰기에는 구현하고자 하는 내용이 너무 가벼웠음


## Install
```sh
npm i date2data
```

## Usage
```javascript
import {getMonthlyDate, getYearlyDate} from "date2data"

getMonthlyDate(2022, 3) //return monthly date
getYearlyDate(2022) //return yearly date
```

## Preview

- getMonthlyDate <br />

![스크린샷 2022-04-08 오전 11 21 01](https://user-images.githubusercontent.com/86063474/162350531-9affd640-3c1d-4b66-a57e-3665ec813ed9.png)

- getYearlyDate <br />

![스크린샷 2022-04-12 오전 10 18 18](https://user-images.githubusercontent.com/86063474/162859389-ef88a5e4-6de5-4330-984b-87adc25f4715.png)


## Update

### 2022-04-12
- Change from class to function
- Add yearly function
- Change function name

### 2022-05-27
- Change date format
