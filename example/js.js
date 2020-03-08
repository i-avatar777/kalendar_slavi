// библиотека с сайта http://krugolet-online.ru/

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PS = (function () {
    var events = {};
    return {
        on: function on(event, cb) {
            if (!events[event]) {
                events[event] = [];
            }
            events[event].push(cb);
        },
        emit: function emit(event, data) {
            if (!events[event]) {
                return;
            }
            events[event].forEach(function (cb) {
                cb(data);
            });
        }
    };
})();

console.log("--------------------------------------");
//************************************************************
/*
   7524 Лѣто от СМЗХ - Сотворения Мира в Звёздном Храме (5 508 до р.х.)
  13024 Лѣто от Великой Стужии (Великого Похолодания) (11 008 до р.х.)
  40020 Лѣто от 3-го Прибытия Вайтманы Перуна (38 004 до р.х.)
  44560 Лѣто от Сотворения Великого Коло Рассении (42 544 до р.х.)
 106794 Лѣто от Основания Асгарда Ирийского (от 9 Тайлетъ) (104 778 до р.х.)
 111822 Лѣто от Великого Переселения из Даарии (109 806 до р.х.)
 143006 Лѣто от периода Трех Лун (140 990 до р.х.)
 153382 Лѣто от Асса Деи (151 336 до р.х.)
 165046 Лѣто от Времени Тары (163 030 до р.х.)
 185782 Лѣто от Времени Туле (183 766 до р.х.)
 211702 Лѣто от Времени Свага (209 686 до р.х.)
 273910 Лѣто от Времени х’Арра (271 894 до р.х)
 460534 Лѣто от Времени Дары (458 518 до р.х.)
 604390 Лѣто от Времени Трех Солнц (начало Даарийского летоисчисления) (602 374 до р.х.)
 957524 Лѣто от Времени появления Богов (955 508 до р.х.)
1,5млрд Лѣто от прибытия на Мидгард первой вайтмары Великой Расы Рода небесного
*/
//************************************************************
var krugolet = {
    leto: ['', 'Путь (странник)', 'Жрец', 'Жрица', 'Мiр (Явь)', 'Свиток', 'Феникс', 'Лис (Навь)', 'Дракон', 'Змей', 'Орёл', 'Дельфин', 'Конь', 'Пёс', 'Тур (бык)', 'Хоромы (дом)', 'Капище (храм)'],
    element: ['', 'Земля', 'Звезда', 'Огонь', 'Солнце', 'Дерево', 'Свага', 'Океан', 'Луна', 'Бог'],
    color: ['', 'Чёрный', 'Красный', 'Алый', 'Златый', 'Зелень', 'Небесный', 'Синий', 'ФиоЛѣтовый', 'Белый'],
    gender: ['', 'Мужской', 'Женский'],
    month: ['', 'Рамхатъ', 'Айлѣтъ', 'Бейлѣтъ', 'Гэйлѣтъ', 'Дайлѣтъ', 'Элѣтъ', 'Вэйлѣтъ', 'Хейлѣтъ', 'Тайлѣтъ'],
    months: ['', 'Божественного Начала', 'Новых Даров', 'Белого Сияния и Покоя Мира', 'Вьюг и Стужи', 'Пробуждения Природы', 'Посева и Наречения', 'Ветров', 'Получения Даров Природы', 'Завершения'],
    hours: ['', { title: 'Паобѣдъ', info: '(начало нового дня)' }, { title: 'Вѣчиръ', info: '(появление звездной росы на Небесах)' }, { title: 'Ничь', info: '(нечётное время трёх Лун)' }, { title: 'Полничь', info: '(полный путь Лун)' }, { title: 'Заутра', info: '(звездное утешение росы)' }, { title: 'Заура', info: '(звездное сияние, заря)' }, { title: 'Заурнице', info: '(окончание звездного сияния)' }, { title: 'Настя', info: '(утренняя заря)' }, { title: 'Сваор', info: '(восход Солнца)' }, { title: 'Утрось', info: '(успокоение росы)' }, { title: 'Поутрось', info: '(путь собирания успокоенной росы)' }, { title: 'Обестина', info: '(обедня, совместное собрание)' }, { title: 'Обед', info: ' или обесть (трапеза)' }, { title: 'Подани', info: '(отдых после трапезы)' }, { title: 'Утдайни', info: '(время окончания деяний)' }, { title: 'Поудани', info: '(завершенный день)' }],
    timeday: ['', 'Вечер', 'Ночь', 'Утро', 'День'],
    day: ['', { title: 'Понедельникъ', god: 'Хорс (Меркурий)', info: 'Начало, день труда' }, { title: 'Вторникъ', god: 'Орей (Марс)', info: 'День труда' }, { title: 'Тритейникъ', god: 'Перун (Юпитер)', info: 'Отдых, пост' }, { title: 'Четверикъ', god: 'Варуна (Уран)', info: 'День труда' }, { title: 'Пятница', god: 'Индра (Хирон)', info: 'День труда' }, { title: 'Шестица', god: 'Стрибог (Сатурн)', info: 'День труда' }, { title: 'Седьмица', god: 'Сварог (Дея - пояс астероидов)', info: 'Отдых, пост' }, { title: 'Осьмица', god: 'Заря-Мерцана (Венера)', info: '(Ось мира) день труда' }, { title: 'Неделя', god: 'Ярило-Солнце', info: 'Отдых, день гостей, посиделок, песен' }],
    chertogi: ['', { title: 'Дева', god: 'Джива', tree: 'Яблоня', from: '18.09', to: '01.01' }, { title: 'Вепрь', god: 'Рамхат', tree: 'Груша', from: '01.01', to: '22.01' }, { title: 'Щука', god: 'Рожана', tree: 'Слива', from: '22.01', to: '04.02' }, { title: 'Лебедь', god: 'Макошь', tree: 'Сосна', from: '04.02', to: '25.02' }, { title: 'Змей', god: 'Семаргл', tree: 'Липа', from: '25.02', to: '07.03' }, { title: 'Ворон', god: 'Коляда', tree: 'Лиственница', from: '07.03', to: '29.03' }, { title: 'Медведь', god: 'Сварог', tree: 'Малина, Бук', from: '29.03', to: '12.04' }, { title: 'Бусел', god: 'Род', tree: 'Ива', from: '12.04', to: '37.04' }, { title: 'Волк', god: 'Велес', tree: 'Тополь', from: '37.04', to: '22.05' }, { title: 'Лиса', god: 'Марена', tree: 'Смородина, Граб', from: '22.05', to: '04.06' }, { title: 'Тур', god: 'Крышень', tree: 'Осина', from: '04.06', to: '26.06' }, { title: 'Лось', god: 'Лада', tree: 'Берёза', from: '26.06', to: '09.07' }, { title: 'Финист', god: 'Вышень', tree: 'Вишня', from: '09.07', to: '31.07' }, { title: 'Конь', god: 'Купала', tree: 'Папоротник, Вяз', from: '31.07', to: '13.08' }, { title: 'Орёл', god: 'Перун', tree: 'Дуб', from: '13.08', to: '35.08' }, { title: 'Рас', god: 'Тарх', tree: 'Ясень, Игг', from: '35.08', to: '18.09' }]
};
//************************************************************
var monthsByLeto = ['',
/*  1 */null,
/*  2 */null,
/*  3 */['23.09', '03.11', '13.12', '23.01', '04.03', '14.04', '24.05', '04.07', '13.08'],
/*  4 */['23.09', '03.11', '13.12', '23.01', '03.03', '13.04', '23.05', '03.07', '12.08'],
/*  5 */null,
/*  6 */null,
/*  7 */['22.09', '02.11', '12.12', '22.01', '03.03', '13.04', '23.05', '03.07', '12.08'],
/*  8 */['22.09', '02.11', '12.12', '22.01', '02.03', '12.04', '22.05', '02.07', '11.08'],
/*  9 */null,
/* 10 */null,
/* 11 */['21.09', '01.11', '11.12', '21.01', '02.03', '12.04', '22.05', '02.07', '11.08'],
/* 12 */['21.09', '01.11', '11.12', '21.01', '01.03', '11.04', '21.05', '01.07', '10.08'],
/* 13 */null,
/* 14 */null,
/* 15 */['20.09', '31.10', '10.12', '20.01', '01.03', '11.04', '21.05', '01.07', '10.08'],
/* 16 */['20.09', '31.10', '11.12', '21.01', '02.03', '12.04', '23.05', '03.07', '13.08']];
//************************************************************
monthsByLeto = monthsByLeto.map(function (line) {
    if (line) {
        line = line.map(function (dm) {
            var _dm$split = dm.split('.');

            var _dm$split2 = _slicedToArray(_dm$split, 2);

            var d = _dm$split2[0];
            var m = _dm$split2[1];

            return m + '.' + d;
        });
        line.unshift('');
        line = line.concat([].concat(line).splice(1, 3));
    }
    return line;
});
//************************************************************
var weekdaysByLeto = [[1, 10, 20, 29, 39, 48, 49, 58, 68, 77, 87, 96, 106, 116, 125, 135, 144], [3, 12, 22, 31, 41, 51, 60, 70, 79, 89, 99, 108, 118, 127, 137], [5, 14, 24, 34, 43, 53, 62, 72, 82, 91, 97, 101, 110, 120, 130, 139], [7, 16, 17, 26, 36, 45, 55, 64, 65, 74, 84, 93, 103, 112, 113, 122, 132, 141], [9, 19, 28, 38, 47, 57, 67, 76, 86, 95, 105, 115, 124, 134, 143], [2, 11, 21, 30, 40, 50, 59, 69, 78, 88, 98, 107, 117, 126, 136], [4, 13, 23, 32, 33, 42, 52, 61, 71, 80, 81, 90, 100, 109, 119, 128, 129, 138], [6, 15, 25, 35, 44, 54, 63, 73, 83, 92, 102, 111, 121, 131, 140], [8, 18, 27, 37, 46, 56, 66, 75, 85, 94, 104, 114, 123, 133, 142]];
//************************************************************
var weekdaysOddEven = {
    1: 6, 6: 2, 2: 7, 7: 3, 3: 8, 8: 4, 4: 9, 9: 5, 5: 1
};
//************************************************************
var weekdaysBySaintMonth = [{ 1: 1, 4: 4, 7: 7 }, { 1: 6, 4: 9, 7: 3 }, { 1: 2, 4: 5, 7: 8 }, { 1: 7, 4: 1, 7: 4 }, { 1: 3, 4: 6, 7: 9 }, { 1: 8, 4: 2, 7: 5 }, { 1: 4, 4: 7, 7: 1 }, { 1: 9, 4: 3, 7: 6 }, { 1: 5, 4: 8, 7: 2 }];
//************************************************************
var rotates = {
    Letos: { dir: +1, start: 770, time: Math.random() + 1.0 },
    Days: { dir: -1, start: 180, time: Math.random() + 0.5 },
    Months: { dir: +1, start: 180, time: Math.random() + 1.0 },
    Weeks: { dir: -1, start: 270, time: Math.random() + 1.5 },
    Chasts: { dir: +1, start: 360, time: Math.random() + 2.0 },
    Hours: { dir: -1, start: 360, time: Math.random() + 2.5 },
    Timeday: { dir: +1, start: 450, time: Math.random() + 3.0 },
    Dols: { dir: -1, start: 450, time: Math.random() + 3.5 },

    Alldays: { dir: +1, start: 270, time: Math.random() + 1.5 }
};
//************************************************************
function memoize(f) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        f.memoize = f.memoize || {};

        return args in f.memoize ? f.memoize[args] : f.memoize[args] = f.apply(this, args);
    };
}
//************************************************************
var _getDay = function _getDay(num, leto, dd, mm, yyyy, letoNow, hour) {
    var m = monthsByLeto;
    m = m[leto] || m[leto + 1] || m[leto + 2];
    // console.log('leto', leto);
    // console.log('m', m);
    var mmdd = mm + '.' + dd,
        month = m.reduce(function (rez, src, i) {
        var _src$split = src.split('.');

        var _src$split2 = _slicedToArray(_src$split, 2);

        var _m = _src$split2[0];
        var _d = _src$split2[1];

        // console.log(i, rez, src, _m, _d, mm, dd)
        // console.log('mmdd >= src', mmdd, src, mmdd >= src);
        return mmdd >= src ? i : mm == _m ? dd < _d ? i - 1 : rez : rez;
    }) % 9 || 9;

    // console.log('month', month);

    // month = month % 9 || 3
    if (letoNow == 16 && leto == 16 && +mm == 9 && (+dd >= 20 && +dd <= 22)) month = 9;

    // console.log('mmdd', mmdd);
    // console.log('month', month);

    var _m$month$split = m[month].split('.');

    var _m$month$split2 = _slicedToArray(_m$month$split, 2);

    var m = _m$month$split2[0];
    var d = _m$month$split2[1];
    var d1 = date(d, m, +mm < +m ? yyyy - 1 : yyyy);
    var d2 = date(dd, mm, yyyy);
    var day = (d2 - d1) / (24 * 60 * 60 * 1000) + 1;

    // console.log('m,mm', m,mm);

    // console.log('d1,d2', d1,d2);

    var weekday_year = 1; // Понедельникъ

    var dayNumber = leto == 16 ? 41 * (month - 1) + day : 40 * (month - 1) + parseInt(month / 2) - 1 + day + 1;
    // console.log('dayNumber',dayNumber);

    weekdaysByLeto.forEach(function (letos, i) {
        if (letos.indexOf(num) !== -1) weekday_year += i;
    });

    var weekday_month = leto != 16 ? month % 2 ? weekday_year : weekdaysOddEven[weekday_year] : weekdaysBySaintMonth[month-1][weekday_year];

    var weekday = (weekday_month + day - 1) % 9 || 9;

    // console.log('month, day, weekday, dayNumber', month, day, weekday, dayNumber);

    var chertog = krugolet.chertogi.reduce(function (rez, src, i) {
        if (!i) return rez;
        if (rez) return rez;

        var _src$from$split = src.from.split('.');

        var _src$from$split2 = _slicedToArray(_src$from$split, 2);

        var d_from = _src$from$split2[0];
        var m_from = _src$from$split2[1];

        var _src$to$split = src.to.split('.');

        var _src$to$split2 = _slicedToArray(_src$to$split, 2);

        var d_to = _src$to$split2[0];
        var m_to = _src$to$split2[1];
        var from = m_from + '.' + d_from;
        var to = m_to + '.' + d_to;
        var now = zero(month) + '.' + zero(day);
        var ret = rez;
        if (now > from && now < to) return i;
        if (now == to && hour < 14) return i;
        if (now == from && hour >= 14) return i;
        if (now > '09.18') return 1;
        return ret;
    }, 0);

    return { month: month, day: day, weekday: weekday, dayNumber: dayNumber, chertog: chertog };
};
var getDay = memoize(_getDay);
//************************************************************
var zero = function zero(int) {
    return (int > 9 ? '' : '0') + int;
};
//************************************************************
var date = function date(dd, mm) {
    var yyyy = arguments.length <= 2 || arguments[2] === undefined ? new Date().getFullYear() : arguments[2];

    return new Date(yyyy, mm - 1, dd);
};
//************************************************************
var getDate = function getDate(_date) {
    var yyyy = _date.getFullYear(),
        mm = zero(_date.getMonth() + 1),
        dd = zero(_date.getDate()),
        hours = _date.getHours(),
        minutes = _date.getMinutes(),
        seconds = _date.getSeconds(),
        ms = _date.getMilliseconds();

    if (hours >= 18) {
        dd = +dd + 1;
        _date = new Date(yyyy, mm - 1, dd);
        yyyy = _date.getFullYear();
        mm = zero(_date.getMonth() + 1);
        dd = zero(_date.getDate());
    }
    return { yyyy: yyyy, mm: mm, dd: dd, hours: hours, minutes: minutes, seconds: seconds, ms: ms };
};
//************************************************************
var calc = function calc() {
    var _date = arguments.length <= 0 || arguments[0] === undefined ? new Date() : arguments[0];

    var _getDate = getDate(_date);

    var yyyy = _getDate.yyyy;
    var mm = _getDate.mm;
    var dd = _getDate.dd;
    var hours = _getDate.hours;
    var minutes = _getDate.minutes;
    var seconds = _getDate.seconds;
    var ms = _getDate.ms;

    var smzhNext = yyyy + 5508 + 1;
    var letoNext = smzhNext % 16 || 16;
    var dateNext = 23 - parseInt((letoNext - 1) / 4) % 4;

    var isNewYear = mm > 9 || mm == 9 && dd >= dateNext ? 1 : 0;

    var smzhNow = yyyy + 5508,
        numNow = (smzhNow - 7376) % 144 || 144,
        letoNow = numNow % 16 || 16;

    var smzh = yyyy + 5508 + isNewYear;
    var num = (smzh - 32) % 144 || 144;
    var leto = num % 16 || 16;
    var element = parseInt((num % 18 || 18) / 2 + .5);

    var _hour = hours / 1.5;
    var _hourInt = parseInt(hours / 1.5);
    var hour = (_hourInt + 4) % 16 || 16;

    var _minutes = minutes;
    var chast = 0;

    var _getDay2 = getDay(num, leto, dd, mm, yyyy, letoNow, hour);

    var month = _getDay2.month;
    var day = _getDay2.day;
    var weekday = _getDay2.weekday;
    var dayNumber = _getDay2.dayNumber;
    var chertog = _getDay2.chertog;

    // console.log("smzhNext=", smzhNext, letoNext, dateNext, isNewYear, _date)

    if (_hourInt < _hour && minutes >= 30) {
        _minutes = minutes - 30;
        if (_hour - _hourInt > .5) {
            hour += 1;
            hour = hour % 16 || 16;
        } else {
            _minutes += 60;
        }
    }

    if (_hourInt < _hour && minutes < 30) {
        _minutes = 30 + minutes;
        if (_hour - _hourInt > .5) {
            _minutes += 30;
        }
    }
    //     console.log('_minutes', _minutes);
    //     console.log('time', hours, minutes, seconds);
    //     console.log('chast 1', chast, parseInt( (chast*60 + seconds) * 1.6 / 60 ));
    chast = parseInt((_minutes * 60 + seconds) * 1.6 / 60);

    var chdol = chast * 37.5,
        minsec = _minutes * 60 + seconds + ms / 1000,
        delta = minsec - chdol,
        dol = parseInt(144 * delta / 37.5) % 144,
        timeday = (parseInt(hour / 4) + 1) % 4 || 4;

    //     console.log("-----------------------------")
    //     console.log("yyyy=", yyyy)
    // console.log("isNewYear=", isNewYear)
    //     console.log("smzh=", smzh)
    //     console.log("num=", num)
    //     console.log("month=", month)
    //     console.log("day=", day)
    //     console.log("weekday=", weekday)
    //     console.log("hour=", hour)
    //     console.log("chast=", chast)
    //     console.log("dol=", dol)

    return { smzh: smzh,
        num: num,
        leto: leto,
        element: element,
        month: month,
        day: day,
        weekday: weekday,
        dayNumber: dayNumber,

        dd: dd,
        mm: mm,
        yyyy: yyyy,

        hour: hour,
        chast: chast,
        dol: dol,

        timeday: timeday,
        chertog: chertog
    };
};

function get_json(url, cb) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText));
        cb(JSON.parse(this.responseText));
    });
    oReq.open("GET", url);
    oReq.send();
}

//************************************************************
var Krugolet = (function (_React$Component) {
    _inherits(Krugolet, _React$Component);

    function Krugolet(props) {
        var _this = this;

        _classCallCheck(this, Krugolet);

        _get(Object.getPrototypeOf(Krugolet.prototype), 'constructor', this).call(this, props);
        //         this.state = { data: calc() }
        this.state = {
            data: calc(),
            menu: null,
            mounted: false,
            fix_data: false,
            descs: null
        };

        this.runTimer = function () {
            !_this.state.fix_data && _this.state.mounted && _this.setState({ data: calc() });
            //         console.log('getDay=', _getDay.memoize);
            setTimeout(_this.runTimer, 100);
        };

        this.get_descs = function () {
            // get_json("https://jsonblob.com/api/jsonBlob/a1ff2a5c-1fc2-11e7-a0ba-09556c161ed6", function (data) {
            //     _this.setState({ descs: data });
            // });
        };

        this.runTimer();

        this.get_descs();
    }

    //************************************************************

    _createClass(Krugolet, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //         console.log('componentDidMount');
            this.setState({ mounted: true });

            var loader = document.getElementById('loader'),
                self = this;

            loader.classList.add("-loaded");
            setTimeout(function () {
                loader.remove();
            }, 2000);

            var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
            var html = document.querySelector('html');

            is_mobile && html.classList.add("-is-mobile");

            var myMenu = document.querySelector(".menu");
            var btn_open = document.querySelector(".menu-icon");
            var btn_close = document.querySelector(".menu-btn.-close");
            btn_open.addEventListener("click", open_menu, false);
            // btn_open.addEventListener("touchstart", open_menu, false);
            btn_close.addEventListener("click", close_menu, false);
            // btn_close.addEventListener("touchstart", close_menu, false);
            // myMenu.classList.remove("-loading");

            myMenu.addEventListener("transitionend", OnTransitionEnd, false);

            function open_menu(e) {
                e.preventDefault();
                // self.setState({ menu: 'MENU_MAIN' });
                PS.emit("select_menu", 'MENU_MAIN');
                // myMenu.classList.toggle("menu--animatable");
                // myMenu.classList.toggle("menu--visible");
                // myMenu.addEventListener("transitionend", OnTransitionEnd, false);
            }

            function close_menu(e) {
                e.preventDefault();
                // self.setState({ menu: null });
                PS.emit("select_menu", '');
                // myMenu.classList.toggle("menu--animatable");
                // myMenu.classList.toggle("menu--visible");
                // myMenu.addEventListener("transitionend", OnTransitionEnd, false);
            }

            function OnTransitionEnd() {
                // console.log('OnTransitionEnd');
                myMenu.classList.remove("menu--animatable");
            }

            function get_menu_id(hash) {
                hash = hash || location.hash;
                // console.log('hash=', hash);
                return (hash ? 'MENU_' : '') + hash.replace('#', '').toUpperCase();
            }

            function locationHashChanged() {
                // console.log('location.hash1=', location.hash);
                PS.emit("select_menu", get_menu_id());
                // self.setState({menu: location.hash.replace('#', '')})
                // console.log('location.hash2=', location.hash.replace('#', ''));
            }

            window.onhashchange = locationHashChanged;

            PS.on("select_menu", (function (menu_id) {
                self.setState({ menu: menu_id });
                location.hash = menu_id.replace('MENU_', '').toLowerCase();
            }).bind(this));

            PS.on("fix_data", (function (_date) {
                var new_data = calc(_date);
                var dd = new_data.dd;
                var mm = new_data.mm;
                var yyyy = new_data.yyyy;

                console.log('%cDATE: %d.%d.%d', "background:#0f0;", +dd, +mm, yyyy);
                _date && self.setState({ data: new_data });
                self.setState({ fix_data: !!_date });
            }).bind(this));

            PS.emit("select_menu", get_menu_id());

        }
    }, {
        key: 'render',
        value: function render() {

            if (!this.state.data) {
                console.log('!!! this.props.data', this.props.data);
                return null;
            }

            var _state$data = this.state.data;
            var smzh = _state$data.smzh;
            var num = _state$data.num;
            var leto = _state$data.leto;
            var element = _state$data.element;
            var month = _state$data.month;
            var day = _state$data.day;
            var weekday = _state$data.weekday;
            var dayNumber = _state$data.dayNumber;
            var dd = _state$data.dd;
            var mm = _state$data.mm;
            var yyyy = _state$data.yyyy;
            var hour = _state$data.hour;
            var chast = _state$data.chast;
            var dol = _state$data.dol;
            var timeday = _state$data.timeday;
            var chertog = _state$data.chertog;
            var menu = this.state.menu;
            var descs = this.state.descs;

            return React.createElement(
                'div',
                null,
                React.createElement(Menu, {
                    menu: menu,
                    smzh: smzh, leto: leto, month: month,
                    day: day, weekday: weekday,
                    chertog: chertog,
                    descs: descs
                }),
                React.createElement(Header, null),
                React.createElement(
                    'div',
                    { className: 'krugolet-info' },
                    React.createElement(InfoHour, { hour: hour, timeday: timeday }),
                    React.createElement(InfoLeto, { smzh: smzh, leto: leto, element: element, num: num }),
                    React.createElement(InfoDay, { day: day, month: month, weekday: weekday, chertog: chertog }),
                    React.createElement(Legend, null),
                    React.createElement(
                        'div',
                        { className: 'krugolet' },
                        React.createElement(Letos, { leto: num }),
                        React.createElement(Days, { month: month, day: day, weekday: weekday, leto: leto }),
                        React.createElement(Months, { month: month }),
                        React.createElement(Alldays, { dayNumber: dayNumber, leto: leto }),
                        React.createElement(Weeks, { weekday: weekday }),
                        React.createElement(Time, { hour: hour, chast: chast }),
                        React.createElement(Chasts, { chast: chast }),
                        React.createElement(Hours, { hour: hour }),
                        React.createElement(Timeday, { timeday: timeday }),
                        React.createElement(Dols, { dol: dol })
                    )
                ),
                React.createElement(Email, { descs: descs, num: num })
            );
        }
    }]);

    return Krugolet;
})(React.Component);

var Time = (function (_React$Component2) {
    _inherits(Time, _React$Component2);

    function Time() {
        _classCallCheck(this, Time);

        _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(Time, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.chast != nextProps.chast || this.props.hour != nextProps.hour;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var hour = _props.hour;
            var chast = _props.chast;

            return React.createElement(
                'div',
                { className: 'info -time' },
                React.createElement(
                    'b',
                    null,
                    hour,
                    '.',
                    chast
                )
            );
        }
    }]);

    return Time;
})(React.Component);

var InfoLeto = (function (_React$Component3) {
    _inherits(InfoLeto, _React$Component3);

    function InfoLeto() {
        _classCallCheck(this, InfoLeto);

        _get(Object.getPrototypeOf(InfoLeto.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(InfoLeto, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.leto != nextProps.leto || this.props.smzh != nextProps.smzh;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var smzh = _props2.smzh;
            var leto = _props2.leto;
            var element = _props2.element;
            var num = _props2.num;

            return React.createElement(
                'div',
                { className: 'info -leto' },
                React.createElement(
                    'div',
                    null,
                    ' СМЗХ: ',
                    React.createElement(
                        'b',
                        null,
                        smzh
                    )
                ),
                React.createElement('div', { className: 'info-div' }),
                React.createElement(
                    'div',
                    null,
                    ' Лѣто: ',
                    React.createElement(
                        'b',
                        null,
                        num,
                        ' - ',
                        krugolet.leto[leto]
                    ),
                    ' '
                ),
                React.createElement(
                    'div',
                    null,
                    ' Стихия: ',
                    React.createElement(
                        'b',
                        null,
                        krugolet.element[element]
                    ),
                    '  '
                ),
                React.createElement(
                    'div',
                    null,
                    ' Цвет:   ',
                    React.createElement(
                        'b',
                        null,
                        krugolet.color[element]
                    ),
                    '    '
                )
            );
        }
    }]);

    return InfoLeto;
})(React.Component);

var InfoDay = (function (_React$Component4) {
    _inherits(InfoDay, _React$Component4);

    function InfoDay() {
        _classCallCheck(this, InfoDay);

        _get(Object.getPrototypeOf(InfoDay.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(InfoDay, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.day != nextProps.day || this.props.chertog != nextProps.chertog || this.props.month != nextProps.month || this.props.weekday != nextProps.weekday;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var day = _props3.day;
            var month = _props3.month;
            var weekday = _props3.weekday;
            var chertog = _props3.chertog;
            var ch = krugolet.chertogi[chertog];

            return React.createElement(
                'div',
                { className: 'info -day' },
                React.createElement(
                    'div',
                    null,
                    'Число: ',
                    React.createElement(
                        'b',
                        null,
                        day
                    ),
                    React.createElement('br', null),
                    'День недели: ',
                    React.createElement(
                        'b',
                        null,
                        krugolet.day[weekday].title
                    ),
                    React.createElement('br', null),
                    krugolet.day[weekday].info,
                    React.createElement('br', null),
                    'Покровитель: ',
                    React.createElement(
                        'b',
                        null,
                        krugolet.day[weekday].god
                    )
                ),                React.createElement('div', { className: 'info-div' }),
                React.createElement(
                    'div',
                    null,
                    'Месяц: ',
                    React.createElement(
                        'b',
                        null,
                        month,
                        ' - ',
                        krugolet.month[month]
                    ),
                    ' ',
                    '(сороковник ',
                    krugolet.months[month],
                    ')'
                ),
                React.createElement(
                    'div',
                    null,
                    'Чертог: ',
                    React.createElement(
                        'b',
                        null,
                        ch.title
                    ),
                    ',',
                    ' ',
                    'Бог-Покровитель: ',
                    React.createElement(
                        'b',
                        null,
                        ch.god
                    ),
                    ', Дерево: ',
                    React.createElement(
                        'b',
                        null,
                        ch.tree
                    )
                )
            );
        }
    }]);

    return InfoDay;
})(React.Component);

var InfoHour = (function (_React$Component5) {
    _inherits(InfoHour, _React$Component5);

    function InfoHour() {
        _classCallCheck(this, InfoHour);

        _get(Object.getPrototypeOf(InfoHour.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************
    // const Copyright = () => (
    //     <div className="copyright">
    //         { console.log("Copyright") }
    //         &copy; Круголѣт
    //     </div>
    // )

    _createClass(InfoHour, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.hour != nextProps.hour || this.props.timeday != nextProps.timeday;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props;
            var hour = (_props4.hour)%16 + 1;
            var timeday = _props4.timeday;

            return React.createElement(
                'div',
                { className: 'info -hour' },
                React.createElement(
                    'div',
                    null,
                    'Время суток: ',
                    React.createElement(
                        'b',
                        null,
                        krugolet.timeday[timeday]
                    )
                ),
                React.createElement('div', { className: 'info-div' }),
                React.createElement(
                    'div',
                    null,
                    'Название часа: ',
                    React.createElement(
                        'b',
                        null,
                        hour
                    ),
                    ' ',
                    ' - ',
                    React.createElement(
                        'b',
                        null,
                        krugolet.hours[hour].title
                    ),
                    React.createElement('br', null),
                    krugolet.hours[hour].info
                )
            );
        }
    }]);

    return InfoHour;
})(React.Component);

var Copyright = (function (_React$Component6) {
    _inherits(Copyright, _React$Component6);

    function Copyright() {
        _classCallCheck(this, Copyright);

        _get(Object.getPrototypeOf(Copyright.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(Copyright, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'copyright' },
                console.log("Круголѣтъ"),
                'Круголѣтъ'
            );
        }
    }]);

    return Copyright;
})(React.Component);

var Letos = (function (_React$Component7) {
    _inherits(Letos, _React$Component7);

    function Letos(props) {
        _classCallCheck(this, Letos);

        _get(Object.getPrototypeOf(Letos.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    //************************************************************

    _createClass(Letos, [{
        key: 'init',
        value: function init() {
            var letosCount = 144,
                letos = (function () {
                var _letos = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Array(letosCount).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var i = _step.value;

                        _letos.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return _letos;
            })(),
                name = "Letos";

            this.state = { letos: letos,
                letosDeg: 360 / letosCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this2);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            //         console.log('nextProps, nextState', nextProps, nextState);
            //         console.log('this', this.props);
            return this.props.leto != nextProps.leto;
        }
    }, {
        key: 'render',
        value: function render() {
            var leto = this.props.leto;
            var _state = this.state;
            var letos = _state.letos;
            var letosDeg = _state.letosDeg;
            var initDeg = _state.initDeg;
            var name = _state.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('leto', leto);
            return React.createElement(
                'div',
                { className: 'letos', style: styleRotate },
                letos.map(function (_leto, i) {
                    var _passed = _leto < leto,
                        styleLeto = { transform: 'rotate(' + -(i + 1) * letosDeg + 'deg)' },
                        styleLetoInner = { transform: 'rotate(' + (i + 1) * letosDeg + 'deg)' },
                        passed = _passed ? ' -passed' : '',
                        current = _leto == leto ? ' -current' : '';
                    //                 , leto_10 = _leto % 10 == 0 ? ' -leto_10' : ''
                    if (_passed) {
                        styleLeto.transform += ' translateY(2px)';
                    }
                    return React.createElement(
                        'div',
                        { className: "leto" + passed + current, style: styleLeto, key: 'leto_' + i },
                        React.createElement(
                            'div',
                            { className: 'leto-inner', style: styleLetoInner },
                            _leto
                        ),
                        _leto % 16 !== 0 && React.createElement('div', { className: 'leto-line' })
                    );
                })
            );
        }
    }]);

    return Letos;
})(React.Component);

var Days = (function (_React$Component8) {
    _inherits(Days, _React$Component8);

    function Days(props) {
        _classCallCheck(this, Days);

        _get(Object.getPrototypeOf(Days.prototype), 'constructor', this).call(this, props);
        this.init(props);
    }

    //************************************************************

    _createClass(Days, [{
        key: 'init',
        value: function init(props) {
            var name = 'Days';

            this.state = _extends({
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            }, this.calc_days(props));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this3);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'calc_days',
        value: function calc_days(props) {
            var month = props.month;
            var day = props.day;
            var weekday = props.weekday;
            var leto = props.leto;

            var daysCount = leto === 16 ? 41 : 40 + month % 2;
            var days = (function () {
                var _days = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = Array(daysCount).keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var i = _step2.value;

                        _days.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                            _iterator2['return']();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return _days;
            })();
            var weekDelta = weekday - day % 9;

            return { days: days,
                daysDeg: 360 / daysCount,
                weekDelta: weekDelta
            };
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.day != nextProps.day || this.props.weekday != nextProps.weekday || this.props.month != nextProps.month || this.props.leto != nextProps.leto) {
                this.setState(this.calc_days(nextProps));
                return false;
            }
            if (this.state.days != nextState.days) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props5 = this.props;
            var month = _props5.month;
            var day = _props5.day;
            var _state2 = this.state;
            var days = _state2.days;
            var daysDeg = _state2.daysDeg;
            var weekDelta = _state2.weekDelta;
            var initDeg = _state2.initDeg;
            var name = _state2.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('day', day);
            return React.createElement(
                'div',
                { className: 'days', style: styleRotate },
                days.map(function (_day, i) {
                    var styleDay = { transform: 'rotate(' + -(i + 1) * daysDeg + 'deg)',
                        zIndex: 41 - i
                    },
                        styleDayInner = { transform: 'rotate(' + (i + 1) * daysDeg + 'deg)' },
                        passed = _day < day ? ' -passed' : '',
                        current = _day == day ? ' -current' : '',
                        day_3 = ((_day + weekDelta) % 9 || 9) == 3 ? ' -day_3' : '',
                        day_7 = ((_day + weekDelta) % 9 || 9) == 7 ? ' -day_7' : '',
                        day_9 = ((_day + weekDelta) % 9 || 9) == 9 ? ' -day_9' : '';
                    return React.createElement(
                        'div',
                        { className: "day" + passed + current + day_3 + day_7 + day_9,
                            style: styleDay,
                            key: 'day_' + i
                        },
                        React.createElement(
                            'div',
                            { className: 'day-inner', style: styleDayInner },
                            _day
                        )
                    );
                })
            );
        }
    }]);

    return Days;
})(React.Component);

var Months = (function (_React$Component9) {
    _inherits(Months, _React$Component9);

    function Months(props) {
        _classCallCheck(this, Months);

        _get(Object.getPrototypeOf(Months.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    /*
                      <div className={"month" + passed + current}
                           style={styleMonth}
                           key={'month_' + i}
                          >
                          <div className="month-inner" style={styleMonthInner}>
                              <div className="month-num">
                                  <svg className="icon"><use xlinkHref={"#m" + _month}></use></svg>
                              </div>
                              <div className="month-title">
                                  {krugolet.month[_month]}
                              </div>
                          </div>
                      </div>
                      */
    //************************************************************

    _createClass(Months, [{
        key: 'init',
        value: function init() {
            var monthsCount = 9,
                months = (function () {
                var _months = [];
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = Array(monthsCount).keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var i = _step3.value;

                        _months.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                            _iterator3['return']();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return _months;
            })(),
                name = 'Months';

            this.state = { months: months,
                monthsDeg: 360 / monthsCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.month != nextProps.month;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this4 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this4);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            var month = this.props.month;
            var _state3 = this.state;
            var months = _state3.months;
            var monthsDeg = _state3.monthsDeg;
            var initDeg = _state3.initDeg;
            var name = _state3.name;

            //         console.log('componentDidMount render', this.state.ready);
            var monthSize = 194,
                monthHeight = 30;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('month', month);
            return React.createElement(
                'div',
                { className: 'months', style: styleRotate },
                months.map(function (_month, i) {
                    var styleMonth = { transform: 'rotate(' + -(i + 1) * monthsDeg + 'deg)' };
                    var styleMonthInner = { transform: 'rotate(' + (i + 1) * monthsDeg + 'deg)' };
                    var passed = _month < month ? ' -passed' : '';
                    var current = _month == month ? ' -current' : '';

                    var _annularSector = annularSector({
                        cx: monthSize, cy: monthSize,
                        r1: monthSize - monthHeight, r2: monthSize - 1,
                        startDeg: monthsDeg / 2 - .7,
                        endDeg: monthsDeg / 2 - .7,
                        textBottom: 9
                    });

                    var dArc = _annularSector.dArc;
                    var dArcText = _annularSector.dArcText;

                    return React.createElement(
                        'svg',
                        { width: '100%', height: '100%',
                            className: "month" + passed + current,
                            style: styleMonth,
                            key: 'month_' + i
                        },
                        React.createElement('path', { d: dArc, className: "month-path" }),
                        React.createElement(
                            'defs',
                            null,
                            React.createElement('path', { id: 'monthText_' + i,
                                className: "month-text_path",
                                d: dArcText
                            })
                        ),
                        React.createElement('use', { xlinkHref: '#monthText_' + i }),
                        React.createElement('use', { xlinkHref: "#m" + _month,
                            className: "month-icon",
                            x: '0', y: '0'
                        }),
                        React.createElement(
                            'text',
                            { className: "month-text" },
                            React.createElement(
                                'textPath',
                                { xlinkHref: '#monthText_' + i, startOffset: '50%',
                                    ref: function (node) {
                                        node && node.setAttribute("startOffset", i === 0 ? '70%' : '66%');
                                    }
                                },
                                krugolet.month[_month]
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Months;
})(React.Component);

var Alldays = (function (_React$Component10) {
    _inherits(Alldays, _React$Component10);

    function Alldays(props) {
        _classCallCheck(this, Alldays);

        _get(Object.getPrototypeOf(Alldays.prototype), 'constructor', this).call(this, props);
        this.init(props);
    }

    //************************************************************

    _createClass(Alldays, [{
        key: 'init',
        value: function init(props) {
            var name = 'Alldays';

            this.state = _extends({
                ready: false,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            }, this.calc_days(props));
        }
    }, {
        key: 'calc_days',
        value: function calc_days(props) {
            var leto = props.leto;

            var alldaysCount = leto == 16 ? 369 : 365,
                alldays = (function () {
                var _alldays = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = Array(alldaysCount).keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var i = _step4.value;

                        _alldays.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                            _iterator4['return']();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                return _alldays;
            })();

            return { alldays: alldays,
                alldaysDeg: 360 / alldaysCount
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            setTimeout(function () {
                // var el = React.findDOMNode(this)
                // el.classList.add('-ready')
                _this5.setState({ ready: true });
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.leto != nextProps.leto) {
                this.setState(this.calc_days(nextProps));
                return true;
            }
            return this.props.dayNumber != nextProps.dayNumber || this.state.alldays != nextState.alldays || this.state.ready != nextState.ready;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props6 = this.props;
            var dayNumber = _props6.dayNumber;
            var leto = _props6.leto;
            var _state4 = this.state;
            var alldays = _state4.alldays;
            var alldaysDeg = _state4.alldaysDeg;
            var initDeg = _state4.initDeg;
            var name = _state4.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's' },
                leto_16 = leto == 16 ? " -leto_16" : "",
                ready = this.state.ready ? " -ready" : "";

            console.log('dayNumber', dayNumber);
            return React.createElement(
                'div',
                { className: "alldays" + leto_16 + ready, style: styleRotate },
                alldays.map(function (_allday, i) {
                    var styleAllday = { transform: 'rotate(' + (-(i + 0) * alldaysDeg - 180 / 9 - .25) + 'deg)' },
                        passed = _allday < dayNumber ? ' -passed' : '',
                        current = _allday == dayNumber ? ' -current' : '';
                    return React.createElement(
                        'div',
                        { className: "allday" + passed + current,
                            style: styleAllday,
                            key: 'allday_' + i
                        },
                        React.createElement('div', { className: 'allday-line' })
                    );
                })
            );
        }
    }]);

    return Alldays;
})(React.Component);

var Weeks = (function (_React$Component11) {
    _inherits(Weeks, _React$Component11);

    function Weeks(props) {
        _classCallCheck(this, Weeks);

        _get(Object.getPrototypeOf(Weeks.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    _createClass(Weeks, [{
        key: 'init',
        value: function init() {
            var weekdaysCount = 9,
                weekdays = (function () {
                var _weekdays = [];
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = Array(weekdaysCount).keys()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var i = _step5.value;

                        _weekdays.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                            _iterator5['return']();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                return _weekdays;
            })(),
                name = 'Weeks';

            this.state = { weekdays: weekdays,
                weekdaysDeg: 360 / weekdaysCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this6);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.weekday != nextProps.weekday;
        }
    }, {
        key: 'render',
        value: function render() {
            var weekday = this.props.weekday;
            var _state5 = this.state;
            var weekdays = _state5.weekdays;
            var weekdaysDeg = _state5.weekdaysDeg;
            var initDeg = _state5.initDeg;
            var name = _state5.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('weekday', weekday);
            return React.createElement(
                'div',
                { className: 'weekdays', style: styleRotate },
                weekdays.map(function (_weekday, i) {
                    var weekSize = 144,
                        weekHeight = 22;
                    //               var styleWeekday      = {transform: `rotate(${-(i+1)*weekdaysDeg+weekdaysDeg/2}deg)`}
                    var styleWeekday = { transform: 'rotate(' + -(i + 1) * weekdaysDeg + 'deg)' };
                    var passed = _weekday < weekday ? ' -passed' : '';
                    var current = _weekday == weekday ? ' -current' : '';

                    var _annularSector2 = annularSector({
                        cx: weekSize, cy: weekSize,
                        r1: weekSize - weekHeight, r2: weekSize - 1,
                        startDeg: weekdaysDeg / 2 - .7,
                        endDeg: weekdaysDeg / 2 - .7,
                        textBottom: 6
                    });

                    var dArc = _annularSector2.dArc;
                    var dArcText = _annularSector2.dArcText;

                    return React.createElement(
                        'svg',
                        { width: '100%', height: '100%',
                            className: "weekday" + passed + current,
                            style: styleWeekday,
                            key: 'weekday_' + i
                        },
                        React.createElement('path', { d: dArc, className: "weekday-path" }),
                        React.createElement(
                            'defs',
                            null,
                            React.createElement('path', { id: 'weekdayText_' + i,
                                className: "weekday-text_path",
                                d: dArcText
                            })
                        ),
                        React.createElement('use', { xlinkHref: '#weekdayText_' + i }),
                        React.createElement('use', { xlinkHref: "#wd" + _weekday,
                            className: "weekday-icon",
                            x: '0', y: '0'
                        }),
                        React.createElement(
                            'text',
                            { className: "weekday-text" },
                            React.createElement(
                                'textPath',
                                { xlinkHref: '#weekdayText_' + i, startOffset: '50%',
                                    ref: function (node) {
                                        node && node.setAttribute("startOffset", '59%');
                                    }
                                },
                                krugolet.day[_weekday].title
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Weeks;
})(React.Component);

function annularSector(options) {
    var opts = optionsWithDefaults(options);
    var cx = opts.cx;
    var cy = opts.cy;
    var r1 = opts.r1;
    var r2 = opts.r2;
    var startRadians = opts.startRadians;
    var closeRadians = opts.closeRadians;
    var textBottom = opts.textBottom;

    var p = [[cx + r2 * Math.cos(startRadians), cy + r2 * Math.sin(startRadians)], [cx + r2 * Math.cos(closeRadians), cy + r2 * Math.sin(closeRadians)], [cx + r1 * Math.cos(closeRadians), cy + r1 * Math.sin(closeRadians)], [cx + r1 * Math.cos(startRadians), cy + r1 * Math.sin(startRadians)], [cx + (r1 + textBottom) * Math.cos(startRadians), cy + (r1 + textBottom) * Math.sin(startRadians)], [cx + (r1 + textBottom) * Math.cos(closeRadians), cy + (r1 + textBottom) * Math.sin(closeRadians)]];

    var angleDiff = closeRadians - startRadians;
    var largeArc = angleDiff % (Math.PI * 2) > Math.PI ? 1 : 0;

    var dArc = [];
    dArc.push("M " + p[0].join(' ')); // Move to P0
    dArc.push("A " + [r2, r2, 0, largeArc, 1, p[1]].join(' ')); // Arc to  P1
    dArc.push("L " + p[2].join(' ')); // Line to P2
    dArc.push("A " + [r1, r1, 0, largeArc, 0, p[3]].join(' ')); // Arc to  P3
    dArc.push("z"); // Close path (Line to P0)
    dArc = dArc.join(' ');

    var dArcText = [];
    dArcText.push("M " + p[4].join(' ')); // Move to P0
    dArcText.push("A " + [r1, r1, 0, largeArc, 1, p[5]].join(' ')); // Arc to  P1
    dArcText = dArcText.join(' ');

    return { dArc: dArc, dArcText: dArcText };

    function optionsWithDefaults(_ref) {
        var _ref$cx = _ref.cx;
        var cx = _ref$cx === undefined ? 0 : _ref$cx;
        var _ref$cy = _ref.cy;
        var cy = _ref$cy === undefined ? 0 : _ref$cy;
        var r1 = _ref.r1;
        var r2 = _ref.r2;
        var _ref$startDeg = _ref.startDeg;
        var startDeg = _ref$startDeg === undefined ? 0 : _ref$startDeg;
        var _ref$endDeg = _ref.endDeg;
        var endDeg = _ref$endDeg === undefined ? 0 : _ref$endDeg;
        var _ref$textBottom = _ref.textBottom;
        var textBottom = _ref$textBottom === undefined ? 0 : _ref$textBottom;

        return {
            cx: cx, cy: cy, r1: r1, r2: r2,
            startRadians: (-90 - startDeg) * Math.PI / 180,
            closeRadians: (-90 + endDeg) * Math.PI / 180,
            textBottom: textBottom
        };
    }
}
//************************************************************

var Hours = (function (_React$Component12) {
    _inherits(Hours, _React$Component12);

    function Hours(props) {
        _classCallCheck(this, Hours);

        _get(Object.getPrototypeOf(Hours.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    //************************************************************

    _createClass(Hours, [{
        key: 'init',
        value: function init() {
            var hoursCount = 16,
                hours = (function () {
                var _hours = [];
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = Array(hoursCount).keys()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var i = _step6.value;

                        _hours.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6['return']) {
                            _iterator6['return']();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                return _hours;
            })(),
                name = 'Hours';

            this.state = { hours: hours,
                hoursCount: hoursCount,
                hoursDeg: 360 / hoursCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this7 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this7);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.hour != nextProps.hour;
        }
    }, {
        key: 'render',
        value: function render() {
            var hour = this.props.hour;
            var _state6 = this.state;
            var hours = _state6.hours;
            var hoursCount = _state6.hoursCount;
            var hoursDeg = _state6.hoursDeg;
            var initDeg = _state6.initDeg;
            var name = _state6.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('hour', hour);
            return React.createElement(
                'div',
                { className: 'hours', style: styleRotate },
                hours.map(function (_hour, i) {
                    var styleMonth = { transform: 'rotate(' + -(i + 1) * hoursDeg + 'deg)' },
                        styleMonthInner = { transform: 'rotate(' + (i + 1) * hoursDeg + 'deg)' },
                        passed = _hour < hour && hour != hoursCount ? ' -passed' : '',
                        current = _hour == hour ? ' -current' : '';
                    return React.createElement(
                        'div',
                        { className: "hour" + passed + current,
                            style: styleMonth,
                            key: 'hour_' + i
                        },
                        React.createElement(
                            'div',
                            { className: 'hour-inner', style: styleMonthInner },
                            _hour
                        )
                    );
                })
            );
        }
    }]);

    return Hours;
})(React.Component);

var Timeday = (function (_React$Component13) {
    _inherits(Timeday, _React$Component13);

    function Timeday(props) {
        _classCallCheck(this, Timeday);

        _get(Object.getPrototypeOf(Timeday.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    //************************************************************

    _createClass(Timeday, [{
        key: 'init',
        value: function init() {
            var timedaysCount = 4,
                timedays = (function () {
                var _timedays = [];
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = Array(timedaysCount).keys()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var i = _step7.value;

                        _timedays.push(i + 1);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7['return']) {
                            _iterator7['return']();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                return _timedays;
            })(),
                name = 'Timeday';

            this.state = { timedays: timedays,
                timedaysDeg: 360 / timedaysCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this8 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this8);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.timeday != nextProps.timeday;
        }
    }, {
        key: 'render',
        value: function render() {
            var timeday = this.props.timeday;
            var _state7 = this.state;
            var timedays = _state7.timedays;
            var timedaysDeg = _state7.timedaysDeg;
            var initDeg = _state7.initDeg;
            var name = _state7.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('timeday', timeday);
            return React.createElement(
                'div',
                { className: 'timedays', style: styleRotate },
                timedays.map(function (_timeday, i) {
                    var timedaySize = 60,
                        timedayHeight = 14;
                    var styleTimeday = { transform: 'rotate(' + (-(i + 1) * timedaysDeg + timedaysDeg / 2) + 'deg)' };
                    var passed = _timeday < timeday ? ' -passed' : '';
                    var current = _timeday == timeday ? ' -current' : '';

                    var _annularSector3 = annularSector({
                        cx: timedaySize, cy: timedaySize,
                        r1: timedaySize - timedayHeight, r2: timedaySize - 1,
                        startDeg: timedaysDeg / 2 + 0.5,
                        endDeg: timedaysDeg / 2 - 0.5,
                        textBottom: 3
                    });

                    var dArc = _annularSector3.dArc;
                    var dArcText = _annularSector3.dArcText;

                    return React.createElement(
                        'svg',
                        { width: '100%', height: '100%',
                            className: "timeday" + passed + current,
                            style: styleTimeday,
                            key: 'timeday_' + i
                        },
                        React.createElement('path', { d: dArc, className: "timeday-path", strokeDasharray: '0,92.7,5.5' }),
                        React.createElement(
                            'defs',
                            null,
                            React.createElement('path', { id: 'timedayText_' + i,
                                className: "timeday-text_path",
                                d: dArcText
                            })
                        ),
                        React.createElement('use', { xlinkHref: '#timedayText_' + i }),
                        React.createElement(
                            'text',
                            { className: "timeday-text" },
                            React.createElement(
                                'textPath',
                                { xlinkHref: '#timedayText_' + i, startOffset: '50%',
                                    ref: function (node) {
                                        node && node.setAttribute("startOffset", '50%');
                                    }
                                },
                                krugolet.timeday[_timeday]
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Timeday;
})(React.Component);

var Chasts = (function (_React$Component14) {
    _inherits(Chasts, _React$Component14);

    function Chasts(props) {
        _classCallCheck(this, Chasts);

        _get(Object.getPrototypeOf(Chasts.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    //************************************************************

    _createClass(Chasts, [{
        key: 'init',
        value: function init() {
            var chastsCount = 144,
                chasts = (function () {
                var _chasts = [];
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = Array(chastsCount).keys()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var i = _step8.value;

                        _chasts.push(i + 0);
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8['return']) {
                            _iterator8['return']();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }

                return _chasts;
            })(),
                name = 'Chasts';

            this.state = { chasts: chasts,
                chastsDeg: 360 / chastsCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this9 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this9);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.chast != nextProps.chast;
        }
    }, {
        key: 'render',
        value: function render() {
            var chast = this.props.chast;
            var _state8 = this.state;
            var chasts = _state8.chasts;
            var chastsDeg = _state8.chastsDeg;
            var initDeg = _state8.initDeg;
            var name = _state8.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            console.log('chast', chast);
            return React.createElement(
                'div',
                { className: 'chasts', style: styleRotate },
                chasts.map(function (_chast, i) {
                    var styleLeto = { transform: 'rotate(' + -(i + 0) * chastsDeg + 'deg)' },
                        passed = _chast < chast ? ' -passed' : '',
                        current = _chast == chast ? ' -current' : '';
                    return React.createElement(
                        'div',
                        { className: "chast" + passed + current,
                            style: styleLeto,
                            key: 'chast_' + i
                        },
                        React.createElement('div', { className: 'chast-line' })
                    );
                })
            );
        }
    }]);

    return Chasts;
})(React.Component);

var Dols = (function (_React$Component15) {
    _inherits(Dols, _React$Component15);

    function Dols(props) {
        _classCallCheck(this, Dols);

        _get(Object.getPrototypeOf(Dols.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    //************************************************************

    _createClass(Dols, [{
        key: 'init',
        value: function init() {
            var dolsCount = 144,
                dols = (function () {
                var _dols = [];
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = Array(dolsCount).keys()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var i = _step9.value;

                        _dols.push(i + 0);
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9['return']) {
                            _iterator9['return']();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }

                return _dols;
            })(),
                name = 'Dols';

            this.state = { dols: dols,
                dolsDeg: 360 / dolsCount,
                initDeg: Math.random() * 90 + rotates[name].start,
                name: name
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this10 = this;

            setTimeout(function () {
                var el = React.findDOMNode(_this10);
                el.classList.add('-ready');
            }, 0);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.dol != nextProps.dol;
        }
    }, {
        key: 'render',
        value: function render() {
            var dol = this.props.dol;
            var _state9 = this.state;
            var dols = _state9.dols;
            var dolsDeg = _state9.dolsDeg;
            var initDeg = _state9.initDeg;
            var name = _state9.name;

            var styleRotate = { transform: 'rotate(' + rotates[name].dir * initDeg + 'deg)',
                transition: 'all ' + rotates[name].time + 's'
            };

            // console.log('dol', dol);
            return React.createElement(
                'div',
                { className: 'dols', style: styleRotate },
                dols.map(function (_dol, i) {
                    var styleLeto = { transform: 'rotate(' + -(i + 0) * dolsDeg + 'deg)' },
                        passed = _dol < dol ? ' -passed' : '',
                        current = _dol == dol ? ' -current' : '';
                    return React.createElement(
                        'div',
                        { className: "dol" + passed + current,
                            style: styleLeto,
                            key: 'dol_' + i
                        },
                        React.createElement('div', { className: 'dol-line' })
                    );
                })
            );
        }
    }]);

    return Dols;
})(React.Component);

var Legend = (function (_React$Component16) {
    _inherits(Legend, _React$Component16);

    function Legend() {
        _classCallCheck(this, Legend);

        _get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(Legend, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'legend' },
                React.createElement(
                    'div',
                    { className: 'legend-line' },
                    React.createElement(
                        'div',
                        { className: 'legend-item -day_3' },
                        'x'
                    ),
                    React.createElement(
                        'div',
                        { className: 'legend-title' },
                        'Тритейникъ или Седьмица'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'legend-line' },
                    React.createElement(
                        'div',
                        { className: 'legend-item -day_9' },
                        'x'
                    ),
                    React.createElement(
                        'div',
                        { className: 'legend-title' },
                        'Неделя'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'legend-line' },
                    React.createElement(
                        'div',
                        { className: 'legend-item -passed' },
                        'x'
                    ),
                    React.createElement(
                        'div',
                        { className: 'legend-title' },
                        'прошедший'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'legend-line' },
                    React.createElement(
                        'div',
                        { className: 'legend-item -current' },
                        'x'
                    ),
                    React.createElement(
                        'div',
                        { className: 'legend-title' },
                        'текущий'
                    )
                )
            );
        }
    }]);

    return Legend;
})(React.Component);

var Email = (function (_React$Component17) {
    _inherits(Email, _React$Component17);

    function Email() {
        _classCallCheck(this, Email);

        _get(Object.getPrototypeOf(Email.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(Email, [{
        key: 'shouldComponentUpdate',

        // constructor (props) {
        //     super(props)
        //     this.init()
        // }
        // init () {
        //     this.state = { fs: false
        //                  }
        // }
        // handleChange (event){
        //     this.setState({fs: event.target.checked})
        //     console.log('change', event.target.checked);
        // }
        value: function shouldComponentUpdate(nextProps, nextState) {
            return false;
            // return this.state.fs != nextState.fs;
        }
    }, {
        key: 'select_menu',
        value: function select_menu(menu_id, e) {
            e && e.preventDefault();
            console.log('select_menu', menu_id);
            PS.emit("select_menu", menu_id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            // <br/>
            // <label>
            //     <input type="checkbox" onChange={(e)=>this.handleChange(e)} checked={this.state.fs} />
            //     {' '}
            //     fullscreen
            // </label>
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'email' },
                    React.createElement(
                        'span',
                        {
                            className: 'menu-link',
                            onClick: function () {
                                return _this11.select_menu('MENU_CURRENT_MONTH');
                            }
                            //,
                            // onTouchStart: function (e) {
                            //     return _this11.select_menu('MENU_CURRENT_MONTH', e);
                            // }
                        },
                        'Текущий сороковник: важные даты и праздники ⇒'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'email' },
                    'Если будут пожелания или найдете неточности пишите на электронный адрес:',
                    ' ',
                    React.createElement(
                        'a',
                        { href: 'mailto:krugolet.online@gmail.com' },
                        'krugolet.online@gmail.com'
                    ),
                    ' ',
                    'или',
                    React.createElement(
                        'a',
                        { href: 'https://vk.com/krugolet__online' },
                        React.createElement(
                            'svg',
                            { className: 'icon -vk' },
                            React.createElement('use', { xlinkHref: '#icon-vk' })
                        ),
                        'ВКонтакте'
                    )
                )
            );
        }
    }]);

    return Email;
})(React.Component);

var Header = (function (_React$Component18) {
    _inherits(Header, _React$Component18);

    function Header() {
        _classCallCheck(this, Header);

        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
    }

    //************************************************************

    _createClass(Header, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'header' },
                React.createElement(Copyright, null),
                React.createElement(
                    'div',
                    { className: 'menu-icon' },
                    '?'
                )
            );
        }
    }]);

    return Header;
})(React.Component);

var Menu = (function (_React$Component19) {
    _inherits(Menu, _React$Component19);

    function Menu(props) {
        _classCallCheck(this, Menu);

        _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);
        this.init();
    }

    //************************************************************

    _createClass(Menu, [{
        key: 'init',
        value: function init() {
            this.state = { menu: null
            };
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            // console.log('Menu shouldComponentUpdate');
            // console.log('this.props.menu', this.props.menu);
            // console.log('nextProps.menu', nextProps.menu);
            // console.log('this.props.menu != nextProps.menu', this.props.menu != nextProps.menu);
            return this.props.menu != nextProps.menu || this.state.menu != nextState.menu || this.props.descs != nextProps.descs;
        }
    }, {
        key: 'select_menu',
        value: function select_menu(menu_id, e) {
            e && e.preventDefault();
            console.log('select_menu', menu_id);
            // this.setState({ menu: menu_id });
            PS.emit("select_menu", menu_id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _menu_items,
                _this12 = this;

            // myMenu.classList.toggle("menu--animatable");
            // myMenu.classList.toggle("menu--visible");

            var _props6 = this.props;
            var menu = _props6.menu;
            var smzh = _props6.smzh;
            var leto = _props6.leto;
            var month = _props6.month;
            var day = _props6.day;
            var weekday = _props6.weekday;
            var chertog = _props6.chertog;
            var descs = _props6.descs;
            var smenu = this.state.menu;
            var visible = menu ? ' menu--visible' : '';
            var animatable = ' menu--animatable';

            if (!menu) {
                this.setState({ menu: null });
            }
            if (smenu) {
                menu = smenu;
            }

            // console.log('menu=', menu);
            // console.log('smenu=', smenu);
            // console.log('visible=', visible);

            // var self = this
            // setTimeout(function () {
            //     self.setState({menu: parseInt(Math.random()*3)})
            //     console.log('smenu2=', self.state.menu);
            // }, 2000)

            var MENU_MAIN = 'MENU_MAIN',
                MENU_CURRENT_MONTH = 'MENU_CURRENT_MONTH',
                MENU_ABOUT = 'MENU_ABOUT',
                MENU_CHERTOGI = 'MENU_CHERTOGI',
                MENU_DNI_NEDELI = 'MENU_DNI_NEDELI',
                MENU_SLAVIC_TIME = 'MENU_SLAVIC_TIME',
                MENU_INTERESTING_DATES = 'MENU_INTERESTING_DATES',
                MENU_HOW_DOWNLOAD = 'MENU_HOW_DOWNLOAD',
                MENU_WRITE_ME = 'MENU_WRITE_ME';

            var content = '',
                btn_prev = true,
                menu_items = (_menu_items = {}, _defineProperty(_menu_items, MENU_MAIN, { title: "" }), _defineProperty(_menu_items, MENU_CURRENT_MONTH, { title: "Текущий сороковник - важные даты" }), _defineProperty(_menu_items, MENU_ABOUT, { title: "Что такое Круголѣтъ?" }), _defineProperty(_menu_items, MENU_CHERTOGI, { title: "Чертоги" }), _defineProperty(_menu_items, MENU_DNI_NEDELI, { title: "Дни недели" }), _defineProperty(_menu_items, MENU_SLAVIC_TIME, { title: "Славянские меры времени" }), _defineProperty(_menu_items, MENU_INTERESTING_DATES, { title: "Некоторые интересные даты" }), _defineProperty(_menu_items, MENU_HOW_DOWNLOAD, { title: "Как скачать?" }), _defineProperty(_menu_items, MENU_WRITE_ME, { title: "Пишите..." }), _menu_items),
                menu_array = [MENU_CURRENT_MONTH, MENU_ABOUT, MENU_CHERTOGI, MENU_DNI_NEDELI, MENU_SLAVIC_TIME, MENU_INTERESTING_DATES, MENU_HOW_DOWNLOAD, MENU_WRITE_ME];

            if (menu !== null && !menu_items[menu]) {
                PS.emit("select_menu", '');
            }

            if (menu === null) {
                btn_prev = false;
            }

            if (menu == MENU_MAIN) {
                btn_prev = false;
                content = React.createElement(
                    'ul',
                    { className: 'menu-list' },
                    menu_array.map(function (menu_id, i) {
                        var menu_item = menu_items[menu_id];
                        return React.createElement(
                            'li',
                            { onClick: function () {
                                    return _this12.select_menu(menu_id);
                                },
                                // onTouchStart: function (e) {
                                //     return _this12.select_menu(menu_id, e);
                                // },
                                key: 'menu_item_' + i
                            },
                            menu_item.title
                        );
                    })
                );
            } else if (menu == MENU_DNI_NEDELI) {
                content = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'b',
                            null,
                            'Девятидневная Неделя'
                        ),
                        ' - это очень удобная система труда и отдыха, чтобы человек не перетруждался.',
                        React.createElement('br', null),
                        'Названия дней - простой счёт: второй, третий, четвёртый, пятый…',
                        React.createElement('br', null),
                        'А также у каждого дня своя Земля-Покровитель.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'b',
                            null,
                            '«Почитайте вы три дня в неделе'
                        ),
                        ' - третий, седьмый и девятый. Почитайте Великие Праздники» - Заповедь Бога Сварога.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Т.е. три дня в Неделе следует отдыхать:'
                    ),
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'b',
                                null,
                                '3 - отдых'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'b',
                                null,
                                '7 - ПОСТЪ'
                            ),
                            ' (однодневный, т.е. разгрузочный день). «День седьмой человекам, скоту и рыбам на покой дан, на отдых телесный. Друг ко другу ходите, друг за дружку радейте, будет радостно вам - пойте гимны Богам»'
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'b',
                                null,
                                '9 - НЕТ ДЕЛ'
                            ),
                            ', т.е. если 3 и 7 дни даны на отдых телесный, то 9-й должен быть не только телесный отдых, но и Духовный и Душевный. «Ежели кто в день девятый трудится, то не будет ему прибытка, ни по жребию, ни по таланту». Т.е. только необходимое: трапезу близким приготовить, баньку для чистоты Рода и пр., о других делах забыть.'
                        )
                    )
                );
            } else if (menu == MENU_ABOUT) {
                content = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Календарь основан на древнейшей 16-тиричной системе счисления. 16 Лѣт образуют ',
                        React.createElement(
                            'b',
                            null,
                            'Круголѣт'
                        ),
                        ', который проходит через 9 стихий, создавая Круг Жизни в 144 лета. И несмотря на свою необычность, для современного восприятия, эта календарная система, наиболее точная и удобная из всех существующих на данный момент календарей. За последние несколько десятков тысяч лет, наш календарь не "убежал" и не "отстал" ни на один день, т.к он опирается на модель Вселенной и на осевую централизацию и галактическую ориентацию Земли.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Наша Мидгард-Земля движется вокруг Ярилы, вращаясь вокруг своей оси, а ось, медленно движется по круговому конусу. При этом северный полюс описывает в пространстве эллипс, который является основанием этого конуса. Ось этого конуса перпендикулярна плоскости земной орбиты, а угол между осью и образующей конуса равен примерно 23°. Это движение оси вращения по круговому конусу по научному называется прецессией, а наши Предки называли Сутками Сварога. И в результате этого полный (визуально наблюдаемый с Земли) оборот звёздного неба, все 16 Чертогов (созвездий) происходит за 25920 лет. На данный момент астрономы считают длину прецессии равной 25729 года (Платонов год). Астрологи считают, что цикл прецессии составляет 25920 лет и одна астрологическая эра равна 1/12 цикла и составляет 2160 лет. Раньше, до катаклизма, прецессии не было, угол оси был примерно 30° и ось строго смотрела в центр нашей галактики:'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '«…В центре Сварги явлен Чертог Огня - Стожары (Светожары) - сама Кузня Сварога, Исток всего Сущего. Сие - вершина Мирового Древа, Мер-горы, место соприкосновения нашего мира со Сверхмиром, в коем сущий Сам Всевышний Род. В Стожарах Гой Рода - Ост Всемирья - пронзает Мировое Яйцо нашей Вселенной, зачиная Коловращение Сварги. Сии Стожары - суть Звезда Севера, которую ныне называют Полярной, а Пращуры наши нарекали Седавой, Сяд-звездой. У Седавы явлены звёздные образы Сварога и Лады в облике человечьем - Созвездия, ныне именуемые Цефеем и Кассиопеей. Сварог и Лада посолонь ходят у Древа Миров, кое обвивают Страж его - Велес в обличье Огненного Змея (созвездие Дракона). Рядом также видно созвездие, которые иные именуют Медведицей, другие - Коровой, а третьи - Оленем. Сие стражи Ирийские - Велес и Дажьбог. В самом центре Стожар Сварожих есмь образ огненный Ковша (Малой Медведицы). Сей Ковш забросил на небо Велес, а потом - Крышень…»'
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'a',
                            { href: 'http://energodar.net/ha-tha.php?str=vedy/kalendar' },
                            'источник'
                        )
                    )
                );
            } else if (menu == MENU_HOW_DOWNLOAD) {
                content = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Если кратко... то пока это страничка в браузере - соответственно нужен браузер и интернет'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Можно "Сохранить как..." из браузера к себе на компьютер, но открываться будет опять же в браузере - но интернет будет не нужен'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'При помощи сервиса desktop.appmaker.xyz можно создавать десктопное приложение из сайта!!!',
                        ' ',
                        React.createElement('br', null),
                        React.createElement(
                            'a',
                            { href: 'https://vk.com/krugolet__online?w=wall-140038870_401' },
                            'собранные приложения'
                        ),
                        ' под Mac, Linux и Windows'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Если знаете способы установки заставкой или фоном пишите на электронный адрес',
                        ' ',
                        React.createElement(
                            'a',
                            { href: 'mailto:krugolet.online@gmail.com' },
                            'krugolet.online@gmail.com'
                        ),
                        React.createElement('br', null),
                        'или',
                        React.createElement(
                            'a',
                            { href: 'https://vk.com/krugolet__online' },
                            React.createElement(
                                'svg',
                                { className: 'icon -vk' },
                                React.createElement('use', { xlinkHref: '#icon-vk' })
                            ),
                            'ВКонтакте'
                        )
                    )
                );
            } else if (menu == MENU_WRITE_ME) {
                content = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Если будут пожелания или найдете неточности пишите на электронный адрес',
                        ' ',
                        React.createElement(
                            'a',
                            { href: 'mailto:krugolet.online@gmail.com' },
                            'krugolet.online@gmail.com'
                        ),
                        React.createElement('br', null),
                        'или',
                        React.createElement(
                            'a',
                            { href: 'https://vk.com/krugolet__online' },
                            React.createElement(
                                'svg',
                                { className: 'icon -vk' },
                                React.createElement('use', { xlinkHref: '#icon-vk' })
                            ),
                            'ВКонтакте'
                        )
                    )
                );
            } else if (menu == MENU_INTERESTING_DATES) {
                var dl = smzh - 7524;
                content = React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            7524 + dl
                        ),
                        ' Лѣто от СМЗХ - Сотворения Мира в Звёздном Храме (заключение мирного договора между Великой Расой и Великим Драконом (древний Китай) (',
                        5508,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            13024 + dl
                        ),
                        ' Лѣто от Великой Стужи (Великого Похолодания, которое было связано с катастрофой - падением на Мидгардъ в Тихий океан осколков разрушенной Луны Фатты. Фатта до падения вращалась вокруг Мидгарда (в экваториальной плоскости) с периодом обращения 13 суток) (',
                        11008,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            40020 + dl
                        ),
                        ' Лѣто от 3-го Прибытия Вайтманы Перуна (',
                        38004,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            44560 + dl
                        ),
                        ' Лѣто от Сотворения Великого Коло Рассении (Великий круг, т.е. объединение славяно-арийских родов для совместного проживания. Т.е., было несколько этапов заселения Мидгарда. Первый этап, заселена была Даария) (',
                        42544,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            106794 + dl
                        ),
                        ' Лѣто от Основания Асгарда Ирийского (от 9 Тайлетъ) (',
                        104778,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            111822 + dl
                        ),
                        ' Лѣто от Великого Переселения из Даарии (',
                        109806,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            143006 + dl
                        ),
                        ' Лѣто от периода Трех Лун (Это Период, когда вокруг Мидгард-Земли вращалось три Луны: Леля, Фатта и Месяц. Леля - малая Луна с периодом обращения 7 суток, Фатта - средняя Луна с периодом обращения 13 суток и Месяц - большая Луна с периодом 29,5 суток. Две из этих Лун - Леля и Месяц были изначально Лунами Мидгардъ-Земли, а Фатту перетащили от Земли Деи) (',
                        140990,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            153382 + dl
                        ),
                        ' Лѣто от Асса Деи (Битва Богов, гибель Деи и на этом месте сейчас пояс астероидов, вращающийся по 5-й орбите после Земли Орея (Марса) (',
                        151336,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            165046 + dl
                        ),
                        ' Лѣто от Времени Тары (Берёт своё начало от времени, когда Мидгардъ-Землю посещала Богиня Тара и Полярная звезда именуется Тара, в честь прекрасной Богини Тары) ',
                        163030,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            185782 + dl
                        ),
                        ' Лѣто от Времени Туле (Прибытие Расенов (глаза карие) и заселения провинции Туле в Даарии) (',
                        183766,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            211702 + dl
                        ),
                        ' Лѣто от Времени Свага (Прибытие Святорусов (глаза голубыe) из чертога Лебедя (Большой Медведицы) и заселения провинции Свага в Даарии) (',
                        209686,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            273910 + dl
                        ),
                        ' Лѣто от Времени х’Арра (Прибытие х`Арийцев (глазa зеленыe) из Чертога Финиста Ясного Сокола (Ророга) или, по современному - созвездия Орион) (',
                        271894,
                        ' до р.х) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            460534 + dl
                        ),
                        ' Лѣто от Времени Дары (Прибытие Да`Арийцев (глазa сереброглазыe) на Вайтмарах (небесных колесницах) на Мидгард из Звездной Системы Зимун - Небесной Коровы (Малая Медведица) (',
                        458518,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            604390 + dl
                        ),
                        ' Лѣто от Времени Трех Солнц (начало Даарийского летоисчисления) (',
                        602374,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            957524 + dl
                        ),
                        ' Лѣто от Времени появления Богов (',
                        955508,
                        ' до р.х.) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            '~1,5 млрд'
                        ),
                        '     Лѣто от прибытия на Мидгард первой вайтмары Великой Расы Рода небесного '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            '~1,96 млрд'
                        ),
                        '    Лѣто от сотворения нашей Солнечной системы '
                    )
                );
            } else if (menu == MENU_SLAVIC_TIME) {
                content = React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Сутки Сварога'
                        ),
                        ' = 180 Кругов Жизни (25 920 Лет) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Круг Жизни'
                        ),
                        ' состоит из 9-ти Кругов Лѣт = 144 Лѣта '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Круг Лѣт'
                        ),
                        ' = 16 Лѣт (пятнадцать простых Лѣт и шестнадцатое ‒ Священное Лѣто) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Лѣто'
                        ),
                        ' = 9 Сороковников (месяцев) и содержит три природных сезона: Оусень, Зима и Весна',
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                ' ',
                                React.createElement(
                                    'b',
                                    null,
                                    'Простое Лѣто'
                                ),
                                ' = 365 Суток, в котором все нечетные Сороковники содержат по 41 дню, а чётные ‒ по 40 дней. (5х41=205) + (4х40=160) = 365 '
                            ),
                            React.createElement(
                                'li',
                                null,
                                ' ',
                                React.createElement(
                                    'b',
                                    null,
                                    'Священное Лѣто'
                                ),
                                ' = 369 Суток в котором все Сороковники содержат по 41 дню. (9х41) = 369 '
                            ),
                            React.createElement(
                                'li',
                                null,
                                ' ',
                                React.createElement(
                                    'b',
                                    null,
                                    'Неполный Сороковник'
                                ),
                                ' = 40 Суток '
                            ),
                            React.createElement(
                                'li',
                                null,
                                ' ',
                                React.createElement(
                                    'b',
                                    null,
                                    'Полный Сороковник'
                                ),
                                ' = 41 Сутки '
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Неделя'
                        ),
                        ' = 9 Суток '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Сутки'
                        ),
                        ' = 16 Часов '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Час'
                        ),
                        ' = 144 Части (= 90 минут) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Часть'
                        ),
                        ' = 1 296 Долей (= 37,56 секунд) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Доля'
                        ),
                        ' = 72 Мгновений (1 сек = 34,5 доли) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Мгновение'
                        ),
                        ' = 760 Мигов (1 сек = 2484,34 мгн) '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Миг'
                        ),
                        ' = 160 Сигов (1 сек = 1888102,236 мигов). Отсюда произошло слово «сигануть», т. е. очень-очень быстро переместиться. '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' ',
                        React.createElement(
                            'b',
                            null,
                            'Сиг'
                        ),
                        ' = 14000 Сантигов (1 сек = 302096358 сигов). 1 сиг примерно равен 30 колебаниям электромагнитной волны атома цезия, взятого за основу для современных атомных часов. '
                    )
                );
            } else if (menu == MENU_CURRENT_MONTH) {
                (function () {
                    var leto_days = ['',
                          { // РАМХАТЪ
                         1: { title: 'НОВОЛЕТИЕ'},
                         4: { title: 'День Ивана Омийского'},
                         6: { title: 'Праздник Урожая'},
                         9: { title: 'День Сергия Странника (день памяти предков)'},
                        11: { title: 'День Ольги Премудрой'},
                        14: { title: 'День Великой Рассении (родительский день)'},
                        16: { title: 'День Василия Буслаева (день памяти предков)'},
                        19: { title: 'День Хария Мудрого'},
                        22: { title: 'День Великого Знания'},

                        23: { post: true, post_2: true, title: 'ПОСТЪ Святый с 23 по 31 день.'},
                        24: { post: true, title: 'День Трояна (день памяти предков)'},
                        25: { post: true },
                        26: { post: true },
                        27: { post: true, title: 'День Святибора (родительский день)'},
                        28: { post: true },
                        29: { post: true },
                        30: { post: true },
                        31: { post: true, title: 'День Моисия Волхва'},

                        36: { title: 'День Сканда Ирийского (день памяти предков)'},
                        38: { title: 'День Богини Рожаны (родительский день)'},
                        40: { title: 'День Мудрых Странников (день памяти предков)'},
                       }, { // АЙЛЕТЪ
                         2: { title: 'День Мирослава Тарийского'},
                         4: { title: 'День Хария Предвечного (день памяти предков)'},
                         7: { title: 'День Родамира Тарийского'},
                        12: { title: 'День Богини Макоши (родительский день)'},
                        13: { title: 'День Олега Воителя'},
                        16: { title: 'День посвященных Инглян (день памяти предков)'},
                        19: { title: 'День Аристарха Мудрого'},
                        22: { title: 'День Откровения Богов'},
                        25: { title: 'День Сварога и Семаргла'},
                        29: { title: 'День Ярослава Мироустроителя (день памяти предков)'},
                        32: { title: 'День Хорива Мудрого'},
                        36: { title: 'День Олега Праведного (день памяти предков)'},
                       }, { // БЕЙЛЕТЪ
                         1: { post: true, post_2: true, title: 'ПОСТЪ Даждьбожий с 1 по 18 день.<br/> День Даждьбога и Марены'},
                         2: { post: true },
                         3: { post: true },
                         4: { post: true, title: 'День Марьяны и Марены'},
                         5: { post: true },
                         6: { post: true },
                         7: { post: true, title: 'День Успокоения (день памяти предков)'},
                         8: { post: true },
                         9: { post: true },
                        11: { post: true },
                        12: { post: true },
                        13: { post: true, title: 'День Перемен. КОЛЯДА (день памяти предков)'},
                        14: { post: true },
                        15: { post: true },
                        16: { post: true },
                        17: { post: true },
                        18: { post: true, title: 'День Спасителя Расы (день памяти предков)'},

                        20: { title: 'День Всеволода Вечного'},
                        22: { title: 'День Великого Покоя'},
                        23: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        24: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        25: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        26: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        27: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        28: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        29: { title: 'РОДОГОЩЪ'},
                        30: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        31: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        32: { title: 'Неделя Памяти Праотцов (родительский день)'},
                        33: { title: 'ДЕНЬ БОГА ПЕРУНА'},
                        38: { title: 'День Александра Основателя'},
                       }, { // Гэйлетъ
                         2: { title: 'День Винитара Воителя'},
                         7: { title: 'День Горислава Мученика'},
                        12: { title: 'День Светозара Вечного'},
                        17: { title: 'День Хария Праведного'},
                        22: { title: 'День Рамхата Странника'},
                        23: { post: true, post_2: true, title: 'ПОСТЪ Чистый с 23 по 40 день.<br/><b>Непозволительно</b> употреблять пищу мясную, жирную, кислую (квашеную), яйца, и любое масло (растительное и животное).<br/><b>Можно</b> – нежирную рыбу (кроме жареной), крупяные каши на пару, макаронные изделия, «серый» и ржаной хлеб, орехи, ягоды, соки, травяные чаи и в малых количествах зернобобовые. Со второй недели Чистого ПОСТа постепенно вводится свежая растительная пища (зелёный лук, редис и т.д.).</br>* Многие каши на пару после приготовления заправляли мёдом, т.е. значительно повышали энергетическую систему.'},
                        24: { post: true },
                        25: { post: true },
                        26: { post: true },
                        27: { post: true },
                        28: { post: true },
                        29: { post: true },
                        30: { post: true },
                        31: { post: true },
                        32: { post: true },
                        33: { post: true, title: 'День Дида. День поминовения всех дедов по Родовой (отцовской) Линии с посещением кладбищ, погостов, отдельных могил и курганов.'},
                        34: { post: true },
                        35: { post: true },
                        36: { post: true },
                        37: { post: true, title: 'День Бога Велеса. Бог-Покровитель скотоводов и животноводов, а также родовой покровитель Западных Славян - Скоттов (шотландцев). Бог Велес, охраняя Небесные Врата Междумирья, пропускает во Сваргу Пречистую Души только тех усопших, кто не щадил своей жизни во защиту Родов своих, во защиту земель Отцов и Дедов, во защиту древней Веры; которые усердно и созидательно трудились для процветания своих Родов и которые от чистого сердца выполняли Два Великих Принципа: Свято чтить Богов и Предков своих и живших по Совести в гармонии с Матерью-Природой.'},
                        38: { post: true },
                        39: { post: true },
                        40: { post: true, title: 'День Храма Души. День, когда человек должен навести порядок в своей Душе. Он должен посетить службу в Храме, принести дары Богам и Предкам, принять Чистый Свет в свою Душу от Храмовой Огневицы. Этот день завершает Чистый Пост.'}
                    }, { // Дайлетъ
                         2: { title: 'День Вечезара Мученика'},
                         5: { title: 'День Аристарха Воителя (день памяти предков)'},
                         6: { title: 'День Боруслава Асгардского'},
                        14: { title: 'День Ратибора Странника (день памяти предков)'},
                        17: { title: 'День Димитрия Капена (родительский день)'},
                        19: { title: 'День Игоря Воителя (день памяти предков)'},
                        22: { title: 'День Весты, Богини Весны'},
                        23: { title: 'КРАСНОГОРЪ. МАСЛЕНИЦА'},
                        24: { post: true, post_2: true, title: 'ПОСТЪ Великий с 24 по 35 день.<br/>День Хария Мученика'},
                        25: { post: true, title: 'День Богуслава Мученика'},
                        26: { post: true, title: 'День Трислава Воителя'},
                        27: { post: true, title: 'День Леды Воительницы'},
                        28: { post: true, title: 'День Богини Тары'},
                        29: { post: true, title: 'День Светозара Спасителя'},
                        30: { post: true, title: 'День Сергия Лучезарного'},
                        31: { post: true, title: 'День Растислава Асгардского'},
                        32: { post: true, title: 'День Руслана Воителя'},
                        33: { post: true, title: 'День Одина Асгардского'},
                        34: { post: true, title: 'День Тора Свентогардского'},
                        35: { post: true, title: 'День Памяти Предков (родительский день)'},
                        36: { title: 'ПАСХЕТЪ (родительский день)<br/>«Почитайте ПАСХЕТЪ, и помните о пятнадцатилетнем переходе из Даарии в Рассению, как шестнадцатое Лето Предки славили Род Небесный за спасение от Потопа Великого» - заповедь Бога Сварога.'},
                        37: { title: 'День Митры Спасителя (родительский день)'},
                        38: { title: 'День Возрождения Тарха (родительский день)'},
                        40: { title: 'День Айвана Вечного'}
                    }, { // Элетъ
                         1: { title: 'День Наречения'},
                         2: { title: 'День Наречения'},
                         3: { title: 'День Наречения'},
                         4: { title: 'День Вечеслава Ирийского (день памяти предков)'},
                         5: { title: 'День Наречения'},
                         6: { title: 'День Наречения'},
                         7: { title: 'День Наречения'},
                         8: { title: 'День Наречения'},
                         9: { title: 'День Наречения'},
                        10: { title: 'День Наречения'},
                        11: { title: 'День Аристарха Праведника (день памяти предков)'},
                        12: { title: 'День Наречения'},
                        13: { title: 'День Лели Небесной (родительский день)'},
                        14: { title: 'День Наречения'},
                        15: { title: 'День Наречения'},
                        16: { title: 'День Борислава Спасителя'},
                        17: { title: 'День Наречения'},
                        18: { title: 'День Наречения'},
                        19: { title: 'День Родомира Ведуна (родительский день)'},
                        20: { title: 'День Наречения'},
                        21: { title: 'День Наречения'},
                        22: { title: 'День Мудрости Крышеня'},
                        23: { title: 'День Наречения'},
                        24: { title: 'День Наречения'},
                        25: { title: 'День Наречения'},
                        26: { title: 'Святочь (день памяти предков)'},
                        27: { title: 'День Наречения'},
                        28: { title: 'День Наречения'},
                        29: { title: 'День Ведомира Асгардского (родительский день)'},
                        30: { title: 'День Наречения'},
                        31: { title: 'День Наречения'},
                        32: { title: 'День Наречения'},
                        33: { title: 'Веда - Инта (день памяти предков)'},
                        34: { title: 'День Наречения'},
                        35: { title: 'День Наречения'},
                        36: { title: 'День Наречения'},
                        37: { title: 'День Матери - Сырой - Земли (родительский день)'},
                        38: { title: 'День Наречения'},
                        39: { title: 'День Наречения'},
                        40: { title: 'День Лады Богородицы (родительский день)'}
                    }, { // Вэйлетъ
                         5: { title: 'День Всеволода Мудрого (день памяти предков)'},
                         9: { title: 'День Бога Вышеня. Вышень - Бог-Покровитель нашей Вселенной в Светлых Мирах Нави, т.е. в Мирах Слави. Заботливый и могучий Отец Бога Сварога. Справедливый судья, разрешающий любые споры, которые возникают между Богами различных Миров или между людьми (родительский день)'},
                        12: { title: 'День Бога Яровита'},
                        14: { title: 'День Ратибора Воителя (день памяти предков)'},
                        18: { title: 'День Мудрости Будха (день памяти предков)'},
                        22: { title: 'День Ра-М-Ха - ИНТА. Ра-М-Ха ИНТА (Истина Наши Твердо Асы) - Мудрость Ра-М-Хи. Ра-М-Ха (РАМХА) - Единый Творец-Созидатель, Вышняя Непознаваемая Сущность, излучающая Изначальный Жизньродящий Свет Радости и Первичный Огонь Мироздания (Жизньнесущую Инглию), из которого появились все ныне существующие, а также существовавшие в прошлом видимые и невидимые Вселенные и всевозможные обитаемые Миры (родительский день)'},
                        25: { title: 'День Ведаслава Праведника (день памяти предков)'},
                        27: { title: 'Триглав. День когда почитаются Великие Триглавы (родительский день)'},
                        30: { title: 'Родоница (родительский день)'},
                        31: { title: 'День Числобога. Числобог - Мудрый, Вышний Бог, управляющий течением Реки Времени, а также Бог-Хранитель Даарийского Круголёта и различных жреческих систем Славяно-Арийского летоисчисления'},

                        32: { post: true, post_2: true, title: 'ПОСТЪ Светлый с 32 Вэйлетъ по 8 Хейлетъ.<br/>День Ладаада'},
                        33: { post: true, title: 'День Бога Хорса. Праздник начинается с правьславления Бога Хорса и принесения жертв безкровных (круглые кулички) на жертвенник. После чего устраиваются хороводы, хороводные пляски - медленные движения с подражаньем словам хороводной, протяжной песни. В летний праздник Бога Хорса с горы к реке обязательно скатывают большое горящее колесо, символизирующее солярный знак солнца'},
                        34: { post: true, title: 'День Ясуни'},
                        35: { post: true, title: 'День Родовита'},
                        36: { post: true, title: 'День Подзвезда'},
                        37: { post: true, title: 'День Родарита'},
                        38: { post: true, title: 'День Родагоста'},
                        39: { post: true, title: 'День Крода (родительский день)'},
                        40: { post: true, title: 'Русалии'},
                        41: { post: true, title: 'Русалии'},
                      }, { // Хейлетъ
                         1: { post: true, title: 'Русалии'},
                         2: { post: true, title: 'День Ярилы-Солнца. Почитается наше Солнце, которое дарует нам тепло и свет.'},
                         3: { post: true, title: 'День Омовения'},
                         4: { post: true, title: 'Русалии'},
                         5: { post: true, title: 'Русалии'},
                         6: { post: true, title: 'Русалии (вещие сны)'},
                         7: { post: true, title: 'День Бога КУПАЛА. Почитается Бог Купала. Люди проходят очищение в пяти стихиях.'},
                         8: { post: true, title: 'День Зари-Мерцаны (день памяти предков)'},

                         9: { title: 'День Великой Инглии (родительский день)'},
                        13: { title: 'День Александра Странника (день памяти предков)'},
                        17: { title: 'День Земли Свята Расы (родительский день)'},
                        18: { title: 'День Орея Вендагардского'},
                        21: { title: 'ПЕРУНИЦА. День почитания Жены Бога Перуна - Дивы.'},
                        22: { title: 'День Сбора Плодов'},
                        27: { title: 'День Бога УДРЗЕЦА (родительский день)'},
                        30: { title: 'День Игоря Святомудрого (день памяти предков)'},
                        33: { title: 'Вышний День Бога ПЕРУНА. День почитания Бога Перуна.'},
                        34: { title: 'День Летиницы (родительский день)'},
                        35: { title: 'РИТА (родительский день)'},
                        38: { title: 'День Александра Ярославича (день памяти предков)'},
                        40: { title: 'ЖИТНИЧЬ. Начало Жатвы'},
                    }, { // ТАЙЛЕТЪ
                         3: { title: 'День Ворона ВАРУНЫ (родительский день)'},
                         6: { title: 'День Александра Мудрого (день памяти предков)'},
                         9: { title: 'День ТРЕХ ЛУН'},
                        12: { title: 'День Скифия Волхва (день памяти предков)'},
                        16: { title: 'День Димитрия Основателя'},
                        18: { title: 'День СТРИБОГА (родительский день)'},
                        21: { title: 'ЗЛАТОГОРКА'},
                        22: { title: 'ЛЮБОМИР. День Свадеб'},
                        24: { title: 'День Свентослава Асгардского (день памяти предков)'},
                        27: { title: 'ДЖИВА-ИНТА (родительский день)'},
                        29: { title: 'День Жели (родительский день)'},
                        31: { title: 'День Святослава Праведного (день памяти предков)'},
                        33: { title: 'Сеченник (родительский день)'},
                        35: { title: 'День Богини КАРНЫ (родительский день)'},
                        38: { title: 'День Светозара Странника'},
                        41: { title: 'День Александра Вещего (день памяти предков)'},
                    }],
                        daysCount = leto === 16 ? 41 : 40 + month % 2,
                        days = (function () {
                        var _days2 = [];
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = Array(daysCount).keys()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                var i = _step10.value;

                                _days2.push(i + 1);
                            }
                        } catch (err) {
                            _didIteratorError10 = true;
                            _iteratorError10 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion10 && _iterator10['return']) {
                                    _iterator10['return']();
                                }
                            } finally {
                                if (_didIteratorError10) {
                                    throw _iteratorError10;
                                }
                            }
                        }

                        return _days2;
                    })(),
                        weekDelta = weekday - day % 9;

                    content = React.createElement(
                        'ol',
                        null,
                        days.map(function (_day, i) {
                            var day_week = (_day + weekDelta + 9) % 9 || 9,
                                c_current = _day == day ? ' -current' : '',
                                c_month = leto_days[month],
                                c_day = leto_days[month][_day],
                                title = c_day ? c_day.title : '',
                                c_class_post = c_day && c_day.post ? ' -post' : '',
                                c_class_post_2 = c_day && c_day.post_2 ? ' -post-2' : '';

                            return React.createElement(
                                'li',
                                { className: 'm-day' + ' -d' + day_week + c_class_post + c_class_post_2 + c_current },
                                React.createElement('div', { className: 'm-day-title', dangerouslySetInnerHTML: { __html: title } })
                            );
                        })
                    );
                })();
            } else if (menu == MENU_CHERTOGI) {
                var chertogi = krugolet.chertogi;
                content = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Сварожий Круг - это небесный путь, по которому движется Ярило-Солнце, проходя через 16 Небесных Чертогов, в которых собраны Солнца, Звёзды и Звёздные скопления (созвездия).'
                    ),
                    React.createElement(
                        'table',
                        { className: 'chertogi'},
                        React.createElement(
                            'tbody',
                            null,
                            React.createElement(
                                'tr',
                                null,
                                React.createElement('th', null),
                                React.createElement(
                                    'th',
                                    null,
                                    'Чертог'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'Покровитель'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'Дерево'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'Период, с'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'по'
                                )
                            ),
                            chertogi.map(function (ch, i) {
                                if (!i) return false;
                                var current_class = i == chertog ? ' -current' : '';

                                var _ch$from$split = ch.from.split('.');

                                var _ch$from$split2 = _slicedToArray(_ch$from$split, 2);

                                var d_from = _ch$from$split2[0];
                                var m_from = _ch$from$split2[1];

                                var _ch$to$split = ch.to.split('.');

                                var _ch$to$split2 = _slicedToArray(_ch$to$split, 2);

                                var d_to = _ch$to$split2[0];
                                var m_to = _ch$to$split2[1];

                                return React.createElement(
                                    'tr',
                                    { className: current_class, key: d_from + m_from + d_to + m_to },
                                    React.createElement(
                                        'td',
                                        null,
                                        i
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        ch.title
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        ch.god
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        ch.tree
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        d_from,
                                        ' ',
                                        krugolet.month[+m_from]
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        d_to,
                                        '   ',
                                        krugolet.month[+m_to]
                                    )
                                );
                            })
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Смена Чертогов происходит в 14-й час по славянскому времени, т.е. в 15:00 (зимой) или в 16:00 (летом) по современному времени.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'b',
                            null,
                            'Образы Чертогов Сварожьего Круга'
                        )
                    ),
                    React.createElement(
                        'ol',
                        { className: 'chertogi-desc' },
                        descs && descs.chertogi.map(function (ch, i) {
                            if (!i) return false;
                            var text = ch.desc.replace(/(\*)(.*?)(\*)/g, "<b>$2</b>");
                            return React.createElement('li', { dangerouslySetInnerHTML: { __html: text } });
                        })
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'a',
                            { href: 'http://derzhavarus.ru/svarozhij-krug.html' },
                            'источник'
                        )
                    )
                );
            }

            if (btn_prev) {
                btn_prev = React.createElement(
                    'div',
                    {
                        onClick: function () {
                            return _this12.select_menu(MENU_MAIN);
                        },
                        // onTouchStart: function (e) {
                        //     return _this12.select_menu(MENU_MAIN, e);
                        // },
                        className: 'menu-btn -prev'
                    },
                    React.createElement(
                        'svg',
                        { className: 'icon -arrow-down' },
                        React.createElement('use', { xlinkHref: '#icon-arrow-down' })
                    )
                );
            }

            var title = menu_items[menu || MENU_MAIN].title;

            return React.createElement(
                'div',
                { className: "menu" + visible + animatable },
                React.createElement(
                    'div',
                    { className: 'app-menu' },
                    React.createElement(
                        'div',
                        { className: 'menu-header' },
                        btn_prev,
                        React.createElement(
                            'div',
                            { className: 'menu-title' },
                            title
                        ),
                        React.createElement(
                            'div',
                            { className: 'menu-btn -close' },
                            '×'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'menu-content' },
                        content
                    )
                )
            );
        }
    }]);

    return Menu;
})(React.Component);

React.render(React.createElement(Krugolet, null), document.getElementById('app'));

function test(d, m, y, hh, mm, ss) {
    PS.emit("fix_data", d ? new Date(y, m - 1, d, hh || 0, mm || 0, ss || 0) : null);
}
