/*zarbaschev script xdose.ru*/
function xCalendar(arrayData, xUrl, startY){
if($('.xCalendar').attr('active') == 'Y'){

$('.xCalendar').append('<div class="calendar"><span></span><select class="ulMouth"></select></div><select class="selectCalc"></select><ul class="weekText"><li>Пн</li><li>Вт</li><li>Ср</li><li>Чт</li><li>Пт</li><li>Сб</li><li>Вс</li></ul><div class="day"></div>');
  
var arrayData = arrayData.split(',');

var TextMouth = '';
var NEXTMouth = '';
var NEXTNum  = '';
var NumDay = ''; 

var ClassDay = '';
var holiday ='';
var holidayCount = 0;

var trEl = '';
var defClass ='';

var arrayDay = [];
var arrayMonth = [];
var NewClass; var day; var month; var EnDay = 0;
var d = new Date(); 
  
var monthNum = d.getMonth()+1; if(monthNum < 10){ month = '0'+monthNum;} else{ month = monthNum;}
var daynum = d.getDate();  if(daynum < 10){ day = '0'+daynum;}  else {day = daynum;}
var output = d.getFullYear();
var yearSelect = '';
  
for(var iY=startY; iY<output+1; iY++){
if(output+1 == iY+1){ yearSelect = 'selected'; }
else yearSelect = ''; 
$(".selectCalc").append('<option '+yearSelect+' value="'+iY+'">'+iY+'</option>');} 
 
var startGetDay = 0;//День недели
var newNumMonth = monthNum+1; 
var newMonth = 0;
if(newNumMonth < 10){ newMonth = '0'+newNumMonth;} else{newMonth = newNumMonth;} 

$('.calendar ul').html('');

function leapYear(output)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

leapYear = false;
var ParamMonth;

function ParamMonthArr(leapYear){
ParamMonth = [
{
1: {'TextMouth':'Январь',    'NumDay':'31'}, 
2: {'TextMouth':'Февраль',   'NumDay':'28'},
3: {'TextMouth':'Март',      'NumDay':'31'},
4: {'TextMouth':'Апрель',    'NumDay':'30'},
5: {'TextMouth':'Май',       'NumDay':'31'},
6: {'TextMouth':'Июнь',      'NumDay':'30'},
7: {'TextMouth':'Июль',      'NumDay':'31'}, 
8: {'TextMouth':'Август',    'NumDay':'31'},
9: {'TextMouth':'Сентябрь',  'NumDay':'30'},
10:{'TextMouth':'Октябрь',   'NumDay':'31'},
11:{'TextMouth':'Ноябрь',    'NumDay':'30'},
12:{'TextMouth':'Декабрь',   'NumDay':'31'}
},
];
	
  if(leapYear == true){
		ParamMonth[0][2].NumDay = 29;
  }
  
return ParamMonth;
}
  
ParamMonthArr(leapYear);
/*
$('.calendar').find('span').text(ParamMonth[0][monthNum]['TextMouth']);
*/

var iiMonth = 0;
for(var iMonth = 1; iMonth < 13; iMonth++){
if(iMonth < 10){ NEXTMouth = '0'+iMonth;} 
  else{ NEXTMouth = iMonth;}
	TextMouth = ParamMonth[0][iMonth]['TextMouth'];
	NumDay = ParamMonth[0][iMonth]['NumDay'];
	$(".calendar .ulMouth").append('<option c="'+NEXTMouth+'" num="'+NumDay+'">'+TextMouth+'</option>');
}
  
 $('option[c='+month+']').addClass('activeCalendar');
var countSetDay = $('option[c='+month+']').attr('num');
$('option[c='+month+']').prop('selected', true);;

function in_array(value, array) {
    for(var i=0; i<array.length; i++){
        if(value == array[i]) return true;
    }
  
return false;}

var selectCalcVal = $('.selectCalc').val();
  
  
function getDayCal(isFunc,newMonth,output){
var getDayCal ='';
newMonth = newMonth.replace(/^0+/, '');

getDayCal = new Date(isFunc+', '+newMonth+', '+output);
getDayCal = getDayCal.getDay(); 
return getDayCal;}


function StartNum(){
  
  
var is = 0;
var num = $('li[c='+month+']').attr('num');


for(var i =0; i < countSetDay; i++){
	
is++;
if(i<9){ is = '0'+is} 


if(i == 0){startGetDay = getDayCal(is, month, output);}
else startGetDay++;
/*var setDateval = i-1
*/

var myDate = new Date();
myDate.setFullYear(output);
myDate.setMonth(month);
myDate.setDate(startGetDay);




if(myDate.getDay() == 6 || myDate.getDay() == 0){  

	holiday = 'holiday';
	holidayCount++;
	if(holidayCount == 2 || myDate.getDay() == 0 ) { trEl = '<div style="width:100%;"></div>';}
		else  trEl = '';
			} else{ trEl = '';holiday = ''; holidayCount = 0;}

	if(in_array(is+'.'+month+'.'+selectCalcVal, arrayData) && month){
		NewClass = 'slick-active';  
			} else {NewClass='CalDisabled';}

$(".day").append('<li numday="'+is+'" month="'+month+'" method="DATE" class="filterapi '+NewClass+' '+holiday+'" style="" >'+ is+'</li>'+trEl);

if(is > daynum || is == daynum){
}else{

if(ParamMonth[0][newNumMonth]['NumDay'] > EnDay+1){EnDay++;}

}





}




var endDayMonth = new Date();
endDayMonth.setFullYear(output);
endDayMonth.setMonth(month);
endDayMonth.setDate(countSetDay);
var numWeek = endDayMonth.getDay()+1;



for(iWeek = numWeek-2; iWeek < 8; iWeek++){
	$(".day").append('<li class="cover" ></li><li class="cover" ></li>');
	}



 /* var is = 0;
for(var iNext =0; iNext < EnDay+1; iNext++){
is++;
if(iNext<9){ is = '0'+is};
if(in_array(is+'.'+newMonth+'.'+output, arrayData)){
NewClass = 'slick-active';
} else {NewClass='CalDisabled';}
$(".day").append('<li numday="'+is+'" month="'+newMonth+'" class="'+NewClass+'" style="">'+ is+'</li>');} */

$(".d").val(day); $(".m").val(month); $(".result").val(output);
$('span[numday='+day+']').addClass('activeCalendar');

}
StartNum();



	function fnShowDay(){
var selectCalcVal = $('.selectCalc option:selected').val();
startGetDay = 1;
ParamMonthArr();
EnDay = 0;

var parentClass = $(this).parent();
/*if(parentClass.hasClass('ulMouth')){
$(".calendar li").removeClass('activeCalendar');*/
$(this).addClass('activeCalendar');
$(".xCalendar").find(".day").html('');
var num = $('.ulMouth option:selected').attr('num');
var m = $('.ulMouth option:selected').attr('c');
$(".m").val(m);
var is = 0;


var monthReplace = m.replace(/^0+/, '');
/*$('.calendar').find('span').text(ParamMonth[0][monthReplace]['TextMouth']);*/

for(var i =0; i < num; i++){
is++;
startGetDay++;
  
if(i<9){ is = '0'+is}

var setDateval = is;
var myDate2= new Date();
myDate2.setFullYear(selectCalcVal);
myDate2.setMonth(m.replace(/^0+/, '')-1); 
myDate2.setDate(i+1);
  
if(myDate2.getDay() == 6 || myDate2.getDay() == 0) { 
holiday = 'holiday';
holidayCount++;

if(holidayCount == 2 || myDate2.getDay() == 0) { trEl = '<div style="width:100%;"></div>';}
else  trEl = '';

}
	else{ 
	trEl = '';
	holiday = '';
	holidayCount = 0;
	}
  
if(in_array(is+'.'+m+'.'+selectCalcVal, arrayData)){
NewClass = 'slick-active';
} else {NewClass='CalDisabled';}



if(daynum-1 > i && monthNum == m){ disClass= 'CalDisabled';}
else disClass = '';


$(".xCalendar").find(".day").append('<li style="display:none;"  method="DATE" numday="'+is+'" month="'+m+'" year="" class="filterapi '+NewClass+' '+disClass+' '+holiday+'" style="" >'+ is+'</li>'+trEl);
$(".xCalendar").find('.day li').fadeIn();

}
		
var endDayMonth = new Date();
endDayMonth.setFullYear(selectCalcVal);
endDayMonth.setMonth(m);
endDayMonth.setDate(num);
var numWeek = endDayMonth.getDay()+1;
for(iWeek = numWeek-2; iWeek < 8; iWeek++){
$(".xCalendar").find(".day").append('<li class="cover" ></li><li class="cover" ></li>');}/*}*/

if(parentClass.hasClass('day')){
var monthInput = $(this).attr('month');
/*$(".xCalendar").find(".day li").removeClass('active');
$(this).addClass('active');
*/
var d = $(this).text();
}

  /*
if(!parentClass.hasClass('ulMouth')){
location.href = xUrl+'?year='+selectCalcVal+'&month='+monthInput+'&day='+d;
}*/
}
/*
$(document).on('click', '.day li',function(e){
fnShowDay();
})
*/
$(document).on('input', '.ulMouth, .selectCalc',function(e){
fnShowDay();
})



}}