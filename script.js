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

document.body.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6,label4,br7,input4)