# date2data
테이블에 날짜별 데이터 넣을 때마다 새로 객체 만들어서 작업하기가 매우 귀찮아서 만들었다. moment.js를 쓰기에는 구현하고자 하는 내용이 너무 가벼웠음


## Install
```sh
npm i date2data
```

## Usage
```javascript
import date2data from "date2data"

date2data.getMonthly(2022, 3) //return date
```

## Preview

![스크린샷 2022-04-08 오전 11 21 01](https://user-images.githubusercontent.com/86063474/162350531-9affd640-3c1d-4b66-a57e-3665ec813ed9.png)
