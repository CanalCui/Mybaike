/**
 * Created by CanalCui on 2016/9/7.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload !="function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload;
            func();
        }
    }
}
addLoadEvent(prepareInformation);
addLoadEvent(showMessage);
function prepareInformation(){
    /* 创建验证密码div
     <div id="tip-password">
     <ul class="check-list">
     <li>长度为6~14个字符</li>
     <li>支持数字，大小写字母和标点符号</li>
     <li>不允许有空格</li>
     </ul>
     </div>
     */
    var div = document.createElement("div");
    div.setAttribute("id","tip-password");
    var ul = document.createElement("ul");
    ul.setAttribute("class","check-list");
    div.appendChild(ul);
    var li = document.createElement("li");
    var lilist = ["长度为6~14个字符","支持数字,大小写字母和标点符号","不允许有空格"];
    // 将创建的li的文本节点插入到Li
    for(var i = 0;i < lilist.length;i++){
        var text = document.createTextNode("");
        text[i].nodeValue = lilist[i];
        li.appendChild(text);
        ul.appendChild(li);
    }
    // 获取所有的input标签
    var inputList = document.getElementsByTagName("input");
    // 将第四个判断密码的追加一个div
    insertAfter(div,inputList[3]);


    //以下为用户名和手机的信息提示
    var mess = document.createElement("span");
    mess.setAttribute("id","message");
    var text = document.createTextNode("");
    mess.appendChild(text);
    insertAfter(mess,inputList[0]);
    // insertAfter(mess,inputList[1]);
}
function showMessage(){
    var form = document.getElementById("form");
    var inputL = form.getElementsByTagName("input");
    for(var i = 0; i < inputL.length; i++){
        inputL[i].onclick = function(){
            var title = inputL[i].getAttribute("title");
            var mess = document.getElementsByTagName("span");
            // insertAfter(mess,this);
            if(document.getElementById("message") && mess.firstChild.nodeType == 3){
                mess.firstChild.nodeValue = title;

            }else{
                return false;
            }
        }
    }


}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
