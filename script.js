function createlables(tagname,attr,attrname,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attr,attrname)
    ele.innerHTML =content
    return ele
}

function createinput(tagname,attr,attrname){
    var ele = document.createElement(tagname)
    ele.setAttribute(attr,attrname)
    return ele
}

function createbr(tagname){
    var ele = document.createElement(tagname)
    return ele
}

var label1=createlables('label','for','fname','FirstName')
var label2=createlables('label','for','mname','MiddleName')
var label3=createlables('label','for','lname','LastName')
var label4=createlables('label','for','number','PhoneNumber')

var input1 = createinput('input','type','text')
var input2 = createinput('input','type','text')
var input3 = createinput('input','type','text')
var input4 = createinput('input','type','number')

var br1 = createbr('br')
var br2 = createbr('br')
var br3 = createbr('br')
var br4 = createbr('br')
var br5 = createbr('br')
var br6 = createbr('br')
var br7 = createbr('br')
var br8 = createbr('br')

document.body.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6,label4,br7,input4,br8)

// creating the table using the  dom

let table=document.createElement('table')
table.setAttribute('class','table')
document.body.append(table)
//creating a table head for the table in the dom and insert in the  table
let tablehead=document.createElement('thead')
table.setAttribute('class','thead-dark')
table.append(tablehead)
//creating a table row for the table in the dom and insert in the  table head

let tablerow=document.createElement('tr')
tablehead.append(tablerow)
//creating a table head for the table row in the dom and insert in the  table row

let th1 = document.createElement('th')
th1.setAttribute('scope','first')
th1.innerText='Fisrt'
let th2 = document.createElement('th')
th2.setAttribute('scope','first')
th2.innerText='Middle'
let th3 = document.createElement('th')
th3.setAttribute('scope','first')
th3.innerText='Last'
// add all the created element inside the  tr
tablerow.append(th1,th2,th3)
// creatin the tbody
let tabelbody = document.createElement('tbody')
table.append(tabelbody)

let tr = document.createElement('tr')
tabelbody.append(tr)
// creatin the td for the tr
let td1 = document.createElement('td')
td1.innerText='Mark'

let td2 = document.createElement('td')
td2.innerText='otto'

let td3 = document.createElement('td')
td3.innerText='Mogo'
// adding all the tr
tr.append(td1,td2,td3)
