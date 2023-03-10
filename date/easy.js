const dates = [
    {id: 0, date: new Date("2023, 1, 2")},
    {id: 1, date: new Date("2023, 1, 31")},
    {id: 2, date: new Date("2023, 1, 29")},
    {id: 3, date: new Date("2017, 12, 7")},
    {id: 4, date: new Date("2016, 11, 15")},
    {id: 5, date: new Date("2016, 11, 15")},
    {id: 6, date: new Date("2015, 12, 19")},
    {id: 7, date: new Date("2015, 12, 19")},
    {id: 8, date: new Date("2015, 12, 19")},
    {id: 9, date: new Date("2014, 12, 19")},
]

//start:  0, 2, 5, 6, 8, 9
//finish: 1, 4, 5, 7, 8, 9
// [[0, 1], [2, 4], [5, 5], [6, 7], [8, 8], [9, 9]]

//s[last] < arr[i] ? (s.push(arr[i]); f.push(s[last])) : return

// клетка S / F / SF / null
// 