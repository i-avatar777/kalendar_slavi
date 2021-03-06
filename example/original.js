Dolja_SlavAri = 0;	//Доля 1/1296 Славяно-Арийской Части Часа
Chasti = "";		//количество (с нулями) Частей (каждая 1/144 Часа) Славяно-Арийского часа
Chas_SlavAri = 4; 	//Час Славяно-Арийский (1/16 суток)
Chas = "";		//Название Славяно-Арийского Часа
Jar = "";		//Время суток
Dni = "";     		//день недели
Chislo_SlavAri = 21;	//Число Славяно-Арийского Месяца (в чётный месяц - 40 дней, в нечётный - 41)
Mes_SlavAri = 3;	//Славяно-Арийский Месяц (1-9)
Mes = "Бейлетъ";	//Славяно-Арийский Месяц (РАБГДЭВХТ)
Krug_Let = 6;		//Лето в Круге Лет - Круг - 16 Лет = 15 Простых Лет + 1 Священное Лето (все 9 Месяцев по 41 дню)
Krug = "";		//Название Лета ("первое" - Звёздного Храма)
Krug_Zizni = 102;	//Лето в Круге Жизни - Цикл 144 Лета = 9 Кругов Лет
S_M_Z_H = 7478;   	//Лето от Сотворения Мира в Звёздном Храме (Победы над Аримами) на полночь 1 января 1970 года от Р.Х.
Chertog = "";		//Чертог, где находится Ярило-Солнце

function KrugoLet()
{
    window.setTimeout("KrugoLet()",100); // обновление часов через 100 миллисекунд
    today=new Date();
    mSec_Greg = today.getTime() - (today.getTimezoneOffset() * 60000); // миллисекунд от полночи 1 января 1970 года до "сейчас"
//	Эти удальцы "привязали" функцию getTime() к "Гринвичу" - по сему надо "добавлять свой пояс"
//	a в функцию getTimezoneOffset(), которая должна возвращать различие в минутах между
//	локальным и универсальным временем, "воткнули минус" - посему и мы "на их минус" ... "свой"
    mSec_SlavAri = mSec_Greg + 21600000; // миллисекунд от 16:000 21 Бейлетъ 7478 лета от С.М.З.Х. до "сейчас"
//	определяем зимнее или летнее время и отнимаем 3600000 миллисекунд, если летнее время
    mSec_SlavAri = mSec_SlavAri - (((new Date(2010, 0, 1)).getTimezoneOffset() - new Date().getTimezoneOffset())) * 60 * 1000;
//
    Vrem_SlavAri = (mSec_SlavAri % 86400000); // остаток миллисекунд в новых (текущих) сутка - сегодня
    Chas_SlavAri = Math.floor(Vrem_SlavAri / 5400000.00); // Славяно-Арийский час "числом" (текущий)
    Chast_SlavAri = Math.floor((Vrem_SlavAri % 5400000) / 37500.00); // Славяно-Арийских частей часа (текущих)
    Dney_SlavAri = Math.floor(1.00 * (mSec_SlavAri / 86400000)); // прошло целых дней от 21 Бейлетъ 7478 от С.М.З.Х. до "сейчас"
    Den_SlavAri =  1 + Math.floor(Dney_SlavAri % 9.00); //День недели "числом" + "1", чтобы Понедельникъ был "1", а не "0" и Вторникъ - "2" т.д.
//
    if(Den_SlavAri == 1) Dni = "<b>Понедельникъ</b><br> 1 день недели<br>день Земли-Хорса (Меркурия)";
    if(Den_SlavAri == 2) Dni = "<b>Вторникъ</b><br> 2 день недели<br>день Земли-Ореи (Марса)";
    if(Den_SlavAri == 3) Dni = "<b>Тритейникъ</b><br> 3 день недели<br>день Земли-Перуна (Юпитера)";
    if(Den_SlavAri == 4) Dni = "<b>Четверикъ</b><br> 4 день недели<br>день Земли-Варуны (Урана)";
    if(Den_SlavAri == 5) Dni = "<b>Пятница</b><br> 5 день недели<br>день Земли-Индры (Хирона)";
    if(Den_SlavAri == 6) Dni = "<b>Шестица</b><br> 6 день недели<br>день Земли-Стрибога (Сатурна)";
    if(Den_SlavAri == 7) Dni = "<b>Седьмица</b><br> 7 день недели<br>день Земли-Сварога (Дэи)";
    if(Den_SlavAri == 8) Dni = "<b>Осьмица</b><br> 8 день недели<br>день Земли-Мерцаны (Венеры)";
    if(Den_SlavAri == 9) Dni = "<b>Неделя</b><br> 9 день недели<br>день Ярилы-Солнца";
    if(Chast_SlavAri < 10) Chasti = "00" + Chast_SlavAri.toString();
    if(Chast_SlavAri >= 10 && Chast_SlavAri < 100) Chasti = "0" + Chast_SlavAri.toString();
    if(Chast_SlavAri >=100) Chasti = Chast_SlavAri.toString();
    if(Chas_SlavAri >=0 && Chas_SlavAri < 4) Jar = "Вечер";
    if(Chas_SlavAri >=4 && Chas_SlavAri < 8) Jar = "Ночь";
    if(Chas_SlavAri >=8 && Chas_SlavAri < 12) Jar = "Утро";
    if(Chas_SlavAri >=12 && Chas_SlavAri <= 15) Jar = "День";
    if(Chas_SlavAri == 0) Chas_SlavAri = 16; // у Наших Пращуров не было "пустого" часа (по аналогии 0:00 - можно считать как 24:00 :)
    if(Chas_SlavAri == 16) Chas = "<b>Поудани </b>(завершённый путь дня)  ";
    if(Chas_SlavAri == 1) Chas = "<b>Паобедъ</b>  ";
    if(Chas_SlavAri == 2) Chas = "<b>Вечиръ</b> (появление звёздной росы на Небесах)  ";
    if(Chas_SlavAri == 3) Chas = "<b>Ничь</b> (нечётное время трех Лун)  ";
    if(Chas_SlavAri == 4) Chas = "<b>Полничь</b> (полный путь Лун)  ";
    if(Chas_SlavAri == 5) Chas = "<b>Заутра</b> (звёздное утешение росы)  ";
    if(Chas_SlavAri == 6) Chas = "<b>Заура</b> (звёздное сияние, Зоря)  ";
    if(Chas_SlavAri == 7) Chas = "<b>Заурнице</b> (окончание звёздного сияния)  ";
    if(Chas_SlavAri == 8) Chas = "<b>Настя</b> (утренняя Зоря)  ";
    if(Chas_SlavAri == 9) Chas = "<b>Сваоръ</b> (восход Солнца доброго дня на Небесах)  ";
    if(Chas_SlavAri == 10) Chas = "<b>Утрось</b> (успокоение росы)  ";
    if(Chas_SlavAri == 11) Chas = "<b>Поутрось</b> (путь собирания успокоенной росы)  ";
    if(Chas_SlavAri == 12) Chas = "<b>Обестна</b> (обедня, совместное собрание) ";
    if(Chas_SlavAri == 13) Chas = "<b>Обесть </b>(обед, трапеза, время принятия пищи)  ";
    if(Chas_SlavAri == 14) Chas = "<b>Подани</b> (отдых после трапезы)  ";
    if(Chas_SlavAri == 15) Chas = "<b>Утдайни</b> (время окончания деяний)  ";
//
// 	доля [графическое отображение - переменная dol; цифрой - переменная dolya] в 1296 раз меньше части,
//	то есть = 37500 / 1296 = 28.93518518... миллисекунд
//	точность не имеет особого значения так как обнавление (корректировка) производиться раз в 100 миллисекунд
// 	а сам компьютер считает интервалы времени в тиках: 1 сек = 18,2 тика (!!!)
//
    var dol = "0000";
    var dolya = Math.floor(((Vrem_SlavAri % 5400000) % 37500) / 28.93518518)
//
//	если убрать этот "кусок" - доли будут "молотить без остановок"
//
    dolya = ((Math.floor(dolya / 16) * 16 + 1295) % 1296) + 1;
//
    if(dolya < 10) dol = "000" + dolya.toString();
    if(dolya >= 10 && dolya < 100) dol = "00" + dolya.toString();
    if(dolya >=100 && dolya < 1000) dol = "0" + dolya.toString();
    if(dolya >=1000) dol = dolya.toString();

    var localtime = new Date();
    var h = localtime.getHours();
    var m = localtime.getMinutes();
    var s = localtime.getSeconds();
    var yy = localtime.getYear()+1900;
    var y = localtime.getYear();
    var l = localtime.getMonth();
    if(l == 0) l = "Январь - Зима";
    if(l == 1) l = "Февраль - Зима";
    if(l == 2) l = "Март - Весна";
    if(l == 3) l = "Апрель - Весна";
    if(l == 4) l = "Май - Весна";
    if(l == 5) l = "Июнь - Лето";
    if(l == 6) l = "Июль - Лето";
    if(l == 7) l = "Август - Лето";
    if(l == 8) l = "Сентябрь - Осень";
    if(l == 9) l = "Октябрь - Осень";
    if(l == 10) l = "Ноябрь - Осень";
    if(l == 11) l = "Декабрь - Зима";
    var d = localtime.getDay();
    if(d == 1) d = "Понедельник";
    if(d == 2) d = "Вторник";
    if(d == 3) d = "Среда";
    if(d == 4) d = "Четверг";
    if(d == 5) d = "Пятница";
    if(d == 6) d = "Суббота";
    if(d == 0) d = "Воскресенье";
    var da = localtime.getDate();
    var hh = (h < 10? "0": "") + h;
    var mm = (m < 10? "0": "") + m;
    var ss = (s < 10? "0": "") + s;

    var moyindikator = document.getElementById("indikator");
    moyindikator.innerHTML = "<table border=1 cellpadding=2 cellspacing=0 style='border-collapse: collapse' bordercolor=#111111 width=100%><tr><td><b>Календарь</b></td><td><b>Время</b></td><td><b>День недели</b></td><td><b>Число</b></td><td><b>Сороковник</b></td><td><b>Год / Л&#1123;то</b></td></tr><tr><td>Григорианский</td><td>" + hh + ":" + mm + ":" + ss + "</td><td>" + d + "</td><td>" + da + "</td><td>" + l + "</td><td>" + yy + " год от Р.Х.</td></tr><tr><td valign=top>Славяно-<br>Арийский</td><td valign=top><b>" + Chas_SlavAri.toString() + ":" + Chasti + "." + dol + "</b><br>Название часа: " + Chas + "<br><b>" + Jar + "</b></td><td valign=top>" + Dni + "</td><td valign=top>" + Chislo_SlavAri + "</td><td valign=top>" + Mes + "</td><td valign=top>" + S_M_Z_H + " Л&#1123;то от С.М.З.Х.<br>Л&#1123;то <b>"+Krug+"</b><br><b>"+Krug_Let+"-ое Л&#1123;то в Круге Лет</b><br><b>"+Krug_Zizni+"-ое Л&#1123;то в Круге Жизни</b></td></tr><tr><td colspan=6 valign=top>Чертог: <b>"+Chertog+"</b><br>Эпоха в Сутках Сварога: <b>Волк (Белый Пёс), Бог-покровитель Велес</b> (2012—3632 Р.Х.)</td></tr></table><br>";

//	теперь займемся собственно расчетом Числа, Месяца и Лета
//	отправной параметр - Dney_SlavAri число целых дней от 21 Бейлетъ 7478 от С.М.З.Х. до "сейчас"
//   	зная, что Бейлетъ - третий Месяц (из 9), а Лето 7478 от С.М.З.Х было 102 Лето в Круге Жизни (из 144)
//      и 6 Лето в Круге Лет (из 16) воспользуемся этой информацией и "перейдем" к новолетию 7479 Лета от С.М.З.Х.
//	цикличностью не забывая, что каждое 16 Лето - Священное - то есть все Месяцы - по 41 дню.
//	21 день в Месяце Бейлетъ (c 21-ое по 41-ое), еще 120 дней (3 Месяца по 40 дней) и 123 дня (3 Месяца по 41 дню)
    Dney_SlavAri = Dney_SlavAri - 264;	//Получим число дней между Новолетием 7479 Лета от С.М.З.Х. и по вчерашний день включительно
    Chislo_SlavAri = 1;	//Следующее Число первое :)
    Mes_SlavAri = 1;	//Следующий Месяц Рамхатъ, то есть "первый"
    Krug_Let = 7;		//исходное	Krug_Let = 6  +  1
    Krug_Zizni = 103;	//Исходное	Krug_Zizni = 102  +  1
    S_M_Z_H = 7479;		//Исходное 	S_M_Z_H = 7478   +   1
//	осталось посчитать от Новолетия 7479 до "вчера"
    while(Dney_SlavAri > 0)
    {
// отнимает (в цикле while) число полных Простых Лет
        if(Krug_Let != 16 && Dney_SlavAri >= 365 )
        {
            Dney_SlavAri = Dney_SlavAri - 365;
            Chislo_SlavAri = 1;
            Mes_SlavAri = 1;
            Krug_Let = Krug_Let + 1;
            Krug_Zizni = Krug_Zizni + 1;
            S_M_Z_H = S_M_Z_H + 1;
        }
// отнимает (в цикле while) число полных Священных Лет
        if(Krug_Let == 16 && Dney_SlavAri >= 369)
        {
            Dney_SlavAri = Dney_SlavAri - 369;
            Chislo_SlavAri = 1;
            Mes_SlavAri = 1;
            Krug_Let = 1;
            if(Krug_Zizni == 144) Krug_Zizni = 1; else Krug_Zizni = Krug_Zizni + 1;
            S_M_Z_H = S_M_Z_H + 1;
        }
// отнимает (в цикле while) для Простого Лета число полных нечетных Месяцев - по 41 дню
        if(Krug_Let != 16 && Dney_SlavAri < 365 && Dney_SlavAri >= 41 && Mes_SlavAri != 2 && Mes_SlavAri != 4 && Mes_SlavAri != 6 && Mes_SlavAri != 8)
        {
            Dney_SlavAri = Dney_SlavAri - 41;
            Chislo_SlavAri = 1;
            if(Mes_SlavAri == 9)
            {
                Mes_SlavAri = 1;
                Krug_Let = Krug_Let + 1;
                Krug_Zizni = Krug_Zizni + 1;
                S_M_Z_H = S_M_Z_H + 1;
            }
            else Mes_SlavAri = Mes_SlavAri + 1;
        }
// отнимает (в цикле while) для Простого Лета число полных четных Месяцев - по 40 дней
        if(Krug_Let != 16 && Dney_SlavAri < 365 && Dney_SlavAri >= 40 && Mes_SlavAri != 1 && Mes_SlavAri != 3 && Mes_SlavAri != 5 && Mes_SlavAri != 7 && Mes_SlavAri != 9)
        {
            Dney_SlavAri = Dney_SlavAri - 40;
            Chislo_SlavAri = 1;
            Mes_SlavAri = Mes_SlavAri + 1;
        }
// отнимает (в цикле while) для Священного Лета число полных Месяцев - по 41 дню
        if(Krug_Let == 16 && Dney_SlavAri >= 41 && Dney_SlavAri < 369)
        {
            Dney_SlavAri = Dney_SlavAri - 41;
            Chislo_SlavAri = 1;
            if(Mes_SlavAri == 9)
            {
                Mes_SlavAri = 1;
                Krug_Let = 1;
                if(Krug_Zizni == 144) Krug_Zizni = 1; else Krug_Zizni = Krug_Zizni + 1;
                S_M_Z_H = S_M_Z_H + 1;
            }
            else Mes_SlavAri = Mes_SlavAri + 1;
        }
// отнимает (в цикле while) для Простого Лета число дней в нечетных Месяцах - которые по 41 дню
        if(Krug_Let != 16 && Dney_SlavAri > 0 && Dney_SlavAri < 41 && Mes_SlavAri != 2 && Mes_SlavAri != 4 && Mes_SlavAri != 6 && Mes_SlavAri != 8)
        {
            Dney_SlavAri = Dney_SlavAri - 1;
            if(Chislo_SlavAri == 41)
            {
                Chislo_SlavAri = 1;
                if(Mes_SlavAri == 9)
                {
                    Mes_SlavAri = 1;
                    Krug_Let = Krug_Let + 1;
                    Krug_Zizni = Krug_Zizni + 1;
                    S_M_Z_H = S_M_Z_H + 1;
                }
                else Mes_SlavAri = Mes_SlavAri + 1;
            }
            else Chislo_SlavAri = Chislo_SlavAri + 1;
        }
// отнимает (в цикле while) для Простого Лета число дней в четных Месяцах - которые по 40 дней
        if(Krug_Let != 16 && Dney_SlavAri > 0 && Dney_SlavAri < 40 && Mes_SlavAri != 1 && Mes_SlavAri != 3 && Mes_SlavAri != 5 && Mes_SlavAri != 7 && Mes_SlavAri != 9)
        {
            Dney_SlavAri = Dney_SlavAri - 1;
            if(Chislo_SlavAri == 40)
            {
                Chislo_SlavAri = 1;
                Mes_SlavAri = Mes_SlavAri + 1;
            }
            else Chislo_SlavAri = Chislo_SlavAri + 1;
        }
// отнимает (в цикле while) для Священного Лета число дней в Месяце - которые все по 41 дню
        if(Krug_Let == 16 && Dney_SlavAri > 0 && Dney_SlavAri < 41)
        {
            Dney_SlavAri = Dney_SlavAri - 1;
            if(Chislo_SlavAri == 41)
            {
                Chislo_SlavAri = 1;
                if(Mes_SlavAri == 9)
                {
                    Mes_SlavAri = 1;
                    Krug_Let = 1;
                    if(Krug_Zizni == 144) Krug_Zizni = 1; else Krug_Zizni = Krug_Zizni + 1;
                    S_M_Z_H = S_M_Z_H + 1;
                }
                else Mes_SlavAri = Mes_SlavAri + 1;
            }
            else Chislo_SlavAri = Chislo_SlavAri + 1;
        }
    }
// Название Месяцев Славяно-Арийского Календаря (Коляды Даръ):
//
    if(Mes_SlavAri == 1) Mes = "<b>Рамхатъ</b><br>Сороковник Божественного Начала<br><b>Оусень</b>";
    if(Mes_SlavAri == 2) Mes = "<b>Айл&#1123;тъ</b><br>Сороковник Новых Даров<br><b>Зима</b>";
    if(Mes_SlavAri == 3) Mes = "<b>Бейл&#1123;тъ</b><br>Сороковник Белаго Сияния и Покоя Мира<br><b>Зима</b>";
    if(Mes_SlavAri == 4) Mes = "<b>Гэйл&#1123;тъ </b><br>Сороковник Вьюг и Стужи<br><b>Зима</b>";
    if(Mes_SlavAri == 5) Mes = "<b>Дайл&#1123;тъ</b><br>Сороковник Пробуждения Природы<br><b>Весна</b>";
    if(Mes_SlavAri == 6) Mes = "<b>Эл&#1123;тъ</b><br>Сороковник Посева и Наречения<br><b>Весна</b>";
    if(Mes_SlavAri == 7) Mes = "<b>Вэйл&#1123;тъ</b><br>Сороковник Ветров<br><b>Весна</b>";
    if(Mes_SlavAri == 8) Mes = "<b>Хейл&#1123;тъ</b><br>Сороковник Получения Даров Природы<br><b>Оусень</b>";
    if(Mes_SlavAri == 9) Mes = "<b>Тайл&#1123;тъ</b><br>Сороковник Завершения<br><b>Оусень</b>";
//
//
//Чертог, где находится Ярило-Солнце: в "переходной день" смена Чертога произходит в 14:000 (Подани - начало Времени отдыха после трапезы)
//   или в 15:00 - советского зимнего времени или в 16:00 - летнего времени
//
    if(Mes_SlavAri == 1 && Chislo_SlavAri == 1) Chertog = "Ярило-Солнце Переходит из Чертога Девы в Чертог Вепря ";
    if(Mes_SlavAri == 1 && Chislo_SlavAri == 22) Chertog = "Ярило-Солнце Переходит из Чертога Вепря в Чертог Шуки ";
    if(Mes_SlavAri == 2 && Chislo_SlavAri == 4) Chertog = "Ярило-Солнце Переходит из Чертога Щуки в Чертог Лебедя ";
    if(Mes_SlavAri == 2 && Chislo_SlavAri == 25) Chertog = "Ярило-Солнце Переходит из Чертога Лебедя в Чертог Змея ";
    if(Mes_SlavAri == 3 && Chislo_SlavAri == 7) Chertog = "Ярило-Солнце Переходит из Чертога Змея в Чертог Ворона ";
    if(Mes_SlavAri == 3 && Chislo_SlavAri == 29) Chertog = "Ярило-Солнце Переходит из Чертога Ворона в Чертог Медведя ";
    if(Mes_SlavAri == 4 && Chislo_SlavAri == 12) Chertog = "Ярило-Солнце Переходит из Чертога Медведя в Чертог Бусла (Журавля) ";
    if(Mes_SlavAri == 4 && Chislo_SlavAri == 37) Chertog = "Ярило-Солнце Переходит из Чертога Бусла (Журавля) в Чертог Волка ";
    if(Mes_SlavAri == 5 && Chislo_SlavAri == 22) Chertog = "Ярило-Солнце Переходит из Чертога Волка в Чертог Лисы ";
    if(Mes_SlavAri == 6 && Chislo_SlavAri == 4) Chertog = "Ярило-Солнце Переходит из Чертога Лисы в Чертог Тура ";
    if(Mes_SlavAri == 6 && Chislo_SlavAri == 26) Chertog = "Ярило-Солнце Переходит из Чертога тура в Чертог Лося ";
    if(Mes_SlavAri == 7 && Chislo_SlavAri == 9) Chertog = "Ярило-Солнце Переходит из Чертога Лося в Чертог Финиста ";
    if(Mes_SlavAri == 7 && Chislo_SlavAri == 31) Chertog = "Ярило-Солнце Переходит из Чертога Финиста в Чертог Коня ";
    if(Mes_SlavAri == 8 && Chislo_SlavAri == 13) Chertog = "Ярило-Солнце Переходит из Чертога Коня в Чертог Орла ";
    if(Mes_SlavAri == 8 && Chislo_SlavAri == 35) Chertog = "Ярило-Солнце Переходит из Чертога Орла в Чертог Расы (Леопарда) ";
    if(Mes_SlavAri == 9 && Chislo_SlavAri == 18) Chertog = "Ярило-Солнце Переходит из Чертога Расы (Леопарда) в Чертог Девы ";
    if(Mes_SlavAri == 1 && Chislo_SlavAri > 1 && Chislo_SlavAri < 22) Chertog = "Ярило-Солнце в Чертоге Вепря, Бог-Покровитель РАМХАТ ";
    if(Mes_SlavAri == 1 && Chislo_SlavAri > 22) Chertog = "Ярило-Солнце в Чертоге Щуки, Богиня-Покровительница РОЖАНА ";
    if(Mes_SlavAri == 2 && Chislo_SlavAri < 4) Chertog = "Ярило-Солнце в Чертоге Щуки, Богиня-Покровительница РОЖАНА ";
    if(Mes_SlavAri == 2 && Chislo_SlavAri > 4 && Chislo_SlavAri < 25) Chertog = "Ярило-Солнце в Чертоге Лебедя, Богиня-Покровительница МАКОШЬ ";
    if(Mes_SlavAri == 2 && Chislo_SlavAri > 25) Chertog = "Ярило-Солнце в Чертоге Змея, Бог-Покровитель СЕМАРГЛ ";
    if(Mes_SlavAri == 3 && Chislo_SlavAri < 7) Chertog = "Ярило-Солнце в Чертоге Змея, Бог-Покровитель СЕМАРГЛ ";
    if(Mes_SlavAri == 3 && Chislo_SlavAri > 7 && Chislo_SlavAri < 29) Chertog = "Ярило-Солнце в Чертоге Ворона, Бог-Покровитель КОЛЯДА ";
    if(Mes_SlavAri == 3 && Chislo_SlavAri > 29) Chertog = "Ярило-Солнце в Чертоге Медведя, Бог-Покровитель СВАРОГ ";
    if(Mes_SlavAri == 4 && Chislo_SlavAri < 12) Chertog = "Ярило-Солнце в Чертоге Медведя, Бог-Покровитель СВАРОГ ";
    if(Mes_SlavAri == 4 && Chislo_SlavAri > 12 && Chislo_SlavAri < 37) Chertog = "Ярило-Солнце в Чертоге Бусла (Аиста), Бог-Покровитель РОД ";
    if(Mes_SlavAri == 4 && Chislo_SlavAri > 37) Chertog = "Ярило-Солнце в Чертоге Волка, Бог-Покровитель ВЕЛЕС ";
    if(Mes_SlavAri == 5 && Chislo_SlavAri < 22) Chertog = "Ярило-Солнце в Чертоге Волка, Бог-Покровитель ВЕЛЕС ";
    if(Mes_SlavAri == 5 && Chislo_SlavAri > 22) Chertog = "Ярило-Солнце в Чертоге Лисы, Богиня-Покровительница МАРЕНА ";
    if(Mes_SlavAri == 6 && Chislo_SlavAri < 4) Chertog = "Ярило-Солнце в Чертоге Лисы, Богиня-Покровительница МАРЕНА ";
    if(Mes_SlavAri == 6 && Chislo_SlavAri > 4 && Chislo_SlavAri < 26) Chertog = "Ярило-Солнце в Чертоге Тура, Бог-Покровитель КРЫШЕНЬ ";
    if(Mes_SlavAri == 6 && Chislo_SlavAri > 26) Chertog = "Ярило-Солнце в Чертоге Лося, Богиня-Покровительница ЛАДА ";
    if(Mes_SlavAri == 7 && Chislo_SlavAri < 9) Chertog = "Ярило-Солнце в Чертоге Лося, Богиня-Покровительница ЛАДА ";
    if(Mes_SlavAri == 7 && Chislo_SlavAri > 9 && Chislo_SlavAri < 31) Chertog = "Ярило-Солнце в Чертоге Финиста, Бог-Покровитель ВЫШЕНЬ ";
    if(Mes_SlavAri == 7 && Chislo_SlavAri > 31) Chertog = "Ярило-Солнце в Чертоге Коня, Бог-Покровитель КУПАЛА ";
    if(Mes_SlavAri == 8 && Chislo_SlavAri < 13) Chertog = "Ярило-Солнце в Чертоге Коня, Бог-Покровитель КУПАЛА  ";
    if(Mes_SlavAri == 8 && Chislo_SlavAri > 13 && Chislo_SlavAri < 35) Chertog = "Ярило-Солнце в Чертоге Орла - Бог-Покровитель ПЕРУН ";
    if(Mes_SlavAri == 8 && Chislo_SlavAri > 35) Chertog = "Ярило-Солнце в Чертоге Раса (Леопарда), Бог-Покровитель ТАРХ ";
    if(Mes_SlavAri == 9 && Chislo_SlavAri < 18) Chertog = "Ярило-Солнце в Чертоге Раса (Леопарда), Бог-Покровитель ТАРХ ";
    if(Mes_SlavAri == 9 && Chislo_SlavAri > 18) Chertog = "Ярило-Солнце в Чертоге Девы, Богиня-Покровительница ДЖИВА";
//
//	можно теперь и со стихиями определиться (девять залов):
//
    if(Krug_Zizni == 1 || Krug_Zizni == 2 || Krug_Zizni == 19 || Krug_Zizni == 20 || Krug_Zizni == 37 || Krug_Zizni == 38 || Krug_Zizni == 55 || Krug_Zizni == 56 || Krug_Zizni == 73 || Krug_Zizni == 74 || Krug_Zizni == 91 || Krug_Zizni == 92 || Krug_Zizni == 109 || Krug_Zizni == 110 || Krug_Zizni == 127 || Krug_Zizni == 128) Krug = "Земного (Черного)";
    if(Krug_Zizni == 129 || Krug_Zizni == 130 || Krug_Zizni == 3 || Krug_Zizni == 4 || Krug_Zizni == 21 || Krug_Zizni == 22 || Krug_Zizni == 39 || Krug_Zizni == 40 || Krug_Zizni == 57 || Krug_Zizni == 58 || Krug_Zizni == 75 || Krug_Zizni == 76 || Krug_Zizni == 93 || Krug_Zizni == 94 || Krug_Zizni == 111 || Krug_Zizni == 112) Krug = "Звездного (Красного)";
    if(Krug_Zizni == 113 || Krug_Zizni == 114  || Krug_Zizni == 131 || Krug_Zizni == 132 || Krug_Zizni == 5 || Krug_Zizni == 6 || Krug_Zizni == 23 || Krug_Zizni == 24 || Krug_Zizni == 41 || Krug_Zizni == 42 || Krug_Zizni == 59 || Krug_Zizni == 60 || Krug_Zizni == 77 || Krug_Zizni == 78 || Krug_Zizni == 95 || Krug_Zizni == 96) Krug = "Огненного (Алого)";
    if(Krug_Zizni == 97 || Krug_Zizni == 98 || Krug_Zizni == 115 || Krug_Zizni == 116 || Krug_Zizni == 133 || Krug_Zizni == 134 || Krug_Zizni == 7 || Krug_Zizni == 8 || Krug_Zizni == 25 || Krug_Zizni == 26 || Krug_Zizni == 43 || Krug_Zizni == 44 || Krug_Zizni == 61 || Krug_Zizni == 62 || Krug_Zizni == 79 || Krug_Zizni == 80) Krug = "Солнечного (Златого)";
    if(Krug_Zizni == 81 || Krug_Zizni == 82 || Krug_Zizni == 99 || Krug_Zizni == 100 || Krug_Zizni == 117 || Krug_Zizni == 118 || Krug_Zizni == 135 || Krug_Zizni == 136 || Krug_Zizni == 9 || Krug_Zizni == 10 || Krug_Zizni == 27 || Krug_Zizni == 28 || Krug_Zizni == 45 || Krug_Zizni == 46 || Krug_Zizni == 63 || Krug_Zizni == 64) Krug = "Древесного (Зеленого)";
    if(Krug_Zizni == 65 || Krug_Zizni == 66 || Krug_Zizni == 83 || Krug_Zizni == 84 || Krug_Zizni == 101 || Krug_Zizni == 102 || Krug_Zizni == 119 || Krug_Zizni == 120 || Krug_Zizni == 137 || Krug_Zizni == 138 || Krug_Zizni == 11 || Krug_Zizni == 12 || Krug_Zizni == 29 || Krug_Zizni == 30 || Krug_Zizni == 47 || Krug_Zizni == 48) Krug = "Свага (Небесного)";
    if(Krug_Zizni == 49 || Krug_Zizni == 50 || Krug_Zizni == 67 || Krug_Zizni == 68 || Krug_Zizni == 85 || Krug_Zizni == 86 || Krug_Zizni == 103 || Krug_Zizni == 104 || Krug_Zizni == 121 || Krug_Zizni == 122 || Krug_Zizni == 139 || Krug_Zizni == 140 || Krug_Zizni == 13 || Krug_Zizni == 14 || Krug_Zizni == 31 || Krug_Zizni == 32) Krug = "Морского (Синего)";
    if(Krug_Zizni == 33 || Krug_Zizni == 34  || Krug_Zizni == 51 || Krug_Zizni == 52 || Krug_Zizni == 69 || Krug_Zizni == 70 || Krug_Zizni == 87 || Krug_Zizni == 88 || Krug_Zizni == 105 || Krug_Zizni == 106 || Krug_Zizni == 123 || Krug_Zizni == 124 || Krug_Zizni == 141 || Krug_Zizni == 142 || Krug_Zizni == 15 || Krug_Zizni == 16) Krug = "Лунного (Фиолетового)";
    if(Krug_Zizni == 17 || Krug_Zizni == 18  || Krug_Zizni == 35 || Krug_Zizni == 36 || Krug_Zizni == 53 || Krug_Zizni == 54 || Krug_Zizni == 71 || Krug_Zizni == 72 || Krug_Zizni == 89 || Krug_Zizni == 90 || Krug_Zizni == 107 || Krug_Zizni == 108 || Krug_Zizni == 125 || Krug_Zizni == 126 || Krug_Zizni == 143 || Krug_Zizni == 144) Krug = "Божественного (Белого)";
//     	шестнадцать хором:
    if(Krug_Zizni == 1 || Krug_Zizni == 129 || Krug_Zizni == 113 || Krug_Zizni == 97 || Krug_Zizni == 81 || Krug_Zizni == 65 || Krug_Zizni == 49 || Krug_Zizni == 33 || Krug_Zizni == 17) Krug = Krug + " Странника (Пути) ";
    if(Krug_Zizni == 2 || Krug_Zizni == 130 || Krug_Zizni == 114 || Krug_Zizni == 98 || Krug_Zizni == 82 || Krug_Zizni == 66 || Krug_Zizni == 50 || Krug_Zizni == 34 || Krug_Zizni == 18) Krug = Krug + " Жреца ";
    if(Krug_Zizni == 19 || Krug_Zizni == 3 || Krug_Zizni == 131 || Krug_Zizni == 115 || Krug_Zizni == 99 || Krug_Zizni == 83 || Krug_Zizni == 67 || Krug_Zizni == 51 || Krug_Zizni == 35) Krug = Krug + " Жрицы (Девы) ";
    if(Krug_Zizni == 20 || Krug_Zizni == 4 || Krug_Zizni == 132 || Krug_Zizni == 116 || Krug_Zizni == 100 || Krug_Zizni == 84 || Krug_Zizni == 68 || Krug_Zizni == 52 || Krug_Zizni == 36) Krug = Krug + " Мира (Яви) ";
    if(Krug_Zizni == 37 || Krug_Zizni == 21 || Krug_Zizni == 5 || Krug_Zizni == 133 || Krug_Zizni == 117 || Krug_Zizni == 101 || Krug_Zizni == 85 || Krug_Zizni == 69 || Krug_Zizni == 53) Krug = Krug + " Свитка ";
    if(Krug_Zizni == 38 || Krug_Zizni == 22 || Krug_Zizni == 6 || Krug_Zizni == 134 || Krug_Zizni == 118 || Krug_Zizni == 102 || Krug_Zizni == 86 || Krug_Zizni == 70 || Krug_Zizni == 54) Krug = Krug + " Феникса ";
    if(Krug_Zizni == 55 || Krug_Zizni == 39  || Krug_Zizni == 23 || Krug_Zizni == 7 || Krug_Zizni == 135 || Krug_Zizni == 119 || Krug_Zizni == 103 || Krug_Zizni == 87 || Krug_Zizni == 71) Krug = Krug + " Лиса (Нави) ";
    if(Krug_Zizni == 56 || Krug_Zizni == 40 || Krug_Zizni == 24 || Krug_Zizni == 8 || Krug_Zizni == 136 || Krug_Zizni == 120 || Krug_Zizni == 104 || Krug_Zizni == 88 || Krug_Zizni == 72) Krug = Krug + " Дракона ";
    if(Krug_Zizni == 73 || Krug_Zizni == 57 || Krug_Zizni == 41 || Krug_Zizni == 25 || Krug_Zizni == 9 || Krug_Zizni == 137 || Krug_Zizni == 121 || Krug_Zizni == 105 || Krug_Zizni == 89) Krug = Krug + " Змея ";
    if(Krug_Zizni == 74 || Krug_Zizni == 58 || Krug_Zizni == 42 || Krug_Zizni == 26 || Krug_Zizni == 10 || Krug_Zizni == 138 || Krug_Zizni == 122 || Krug_Zizni == 106 || Krug_Zizni == 90) Krug = Krug + " Орла ";
    if(Krug_Zizni == 91 || Krug_Zizni == 75 || Krug_Zizni == 59 || Krug_Zizni == 43 || Krug_Zizni == 27 || Krug_Zizni == 11 || Krug_Zizni == 139 || Krug_Zizni == 123 || Krug_Zizni == 107) Krug = Krug + " Дельфина ";
    if(Krug_Zizni == 92 || Krug_Zizni == 76 || Krug_Zizni == 60 || Krug_Zizni == 44 || Krug_Zizni == 28 || Krug_Zizni == 12 || Krug_Zizni == 140 || Krug_Zizni == 124 || Krug_Zizni == 108) Krug = Krug + " Коня ";
    if(Krug_Zizni == 109 || Krug_Zizni == 93 || Krug_Zizni == 77 || Krug_Zizni == 61 || Krug_Zizni == 45 || Krug_Zizni == 29 || Krug_Zizni == 13 || Krug_Zizni == 141 || Krug_Zizni == 125) Krug = Krug + " Пса ";
    if(Krug_Zizni == 110 || Krug_Zizni == 94 || Krug_Zizni == 78 || Krug_Zizni == 62 || Krug_Zizni == 46 || Krug_Zizni == 30 || Krug_Zizni == 14 || Krug_Zizni == 142 || Krug_Zizni == 126) Krug = Krug + " Тура (Коровы) ";
    if(Krug_Zizni == 127 || Krug_Zizni == 111 || Krug_Zizni == 95 || Krug_Zizni == 79 || Krug_Zizni == 63 || Krug_Zizni == 47 || Krug_Zizni == 31 || Krug_Zizni == 15 || Krug_Zizni == 143) Krug = Krug + " Хором (Дома) ";
    if(Krug_Zizni == 128 || Krug_Zizni == 112 || Krug_Zizni == 96 || Krug_Zizni == 80 || Krug_Zizni == 64 || Krug_Zizni == 48 || Krug_Zizni == 32 || Krug_Zizni == 16 || Krug_Zizni == 144) Krug = Krug + " Капища (Храма) ";
}