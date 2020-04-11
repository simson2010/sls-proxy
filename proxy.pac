function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();
 
    //Return proxy processing by WeekDay
    if (weekdayRange('SUN')) {
        return noGoSun(url, host);
    }
    if (weekdayRange('MON')) {
        return noGOMon(url, host);
    }
    if (weekdayRange('TUE')) {
        return noGoTue(url, host);
    }
    if (weekdayRange('WED')) {
        return noGoWed(url, host);
    }
    if (weekdayRange('THU')) {
        return noGoThu(url, host);
    }
    if (weekdayRange('FRI')) {
        return noGoFri(url, host);
    }
    if (weekdayRange('SAT')) {
        return noGoSat(url, host);
    }

    return dummyProxy()
};

//Return proxy processing by url
function noGo(url, host){
    if ( 
        shExpMatch(url, "*100bt.com*") ||
        shExpMatch(url, "*dm5.com*") ||
        shExpMatch(url, "*anyv.net*") ||
        shExpMatch(url, "*aigexing.com*") ||
        shExpMatch(url, "*62a.net*") ||
        shExpMatch(url, "*bkill.com*") ||
        shExpMatch(url, "*live.kuaishou.com*") ||
        shExpMatch(url, "*360doc.com*") ||
        shExpMatch(url, "*bilibili.com*") ||
        shExpMatch(url, "*weibo.com*") ||
        shExpMatch(url, "*kada.163.com*") ||
        shExpMatch(url, "*bbs.nga.cn*") ||
        shExpMatch(url, "*wowoqq.com*") ||
        shExpMatch(url, "*jz5u.com*") ||
        shExpMatch(url, "*emotion.yxlady.com*") ||
        shExpMatch(url, "*qqtn.com*") ||
        shExpMatch(url, "*acs.youku.com*") ||
        shExpMatch(url, "*youku.com*") ||
        shExpMatch(url, "*soman.com*") ||
        shExpMatch(url, "*qzone.qq.com*") ||
        shExpMatch(url, "*xiami.com*") ||
        shExpMatch(url, "*kugou.com*") ||
        shExpMatch(url, "*duitang*")
    ) {
        return dummyProxy();
    } else { 
        return "DIRECT";
    };
};

//Always return dummy proxy, means can't go online.
function dummyProxy(){
    return "PROXY 192.168.1.1:8080";
};

//Each weekday processing
function noGoSun(url, host){
    if (timeRange(01,1, 13,59)) {
        return dummyProxy();
    } else if(timeRange(16,1, 18,59)) {
        return noGo(url, host);
    } else if (timeRange(19,00, 21,00)){
        return noGo(url, host);
    } else if (timeRange(21,01, 23,59)) {
        return dummyProxy();
    } else {
        return "DIRECT";  
    }
}

function noGOMon(url, host) {
    if (timeRange(8, 12)) {
        return noGo(url, host);
    } else if (timeRange(15,00, 16,59)){
        return noGo(url, host);
    } else if (timeRange(19, 21)){
        return noGo(url, host);
    } else {
        return "DIRECT";  
    }
};

function noGoTue(url, host) { 
    if (timeRange(8, 12)) {
        return noGo(url, host);
    } else if (timeRange(15,00, 18,00)){
        return noGo(url, host);
    } else {
        return "DIRECT";  
    }
};

function noGoWed(url, host){
    if (timeRange(8, 12)) {
        return noGo(url, host);
    } else if (timeRange(14,00, 15,59)){
        return noGo(url, host);
    } else if (timeRange(16, 20)){
        return dummyProxy();
    } else {
        return "DIRECT";  
    }
};

function noGoThu(url, host){
    return noGoWed(url, host)
};

function noGoFri(url, host){
    if (timeRange(8, 12)) {
        return noGo(url, host);
    } else if (timeRange(14,00,17,59)){
        return dummyProxy();
    } else if (timeRange(18,00, 21,50)){
        return noGo(url, host);
    } else {
        return "DIRECT";  
    }
};

function noGoSat(url, host){
    if (timeRange(01,01, 12, 59)) {
        return dummyProxy();
    } else if (timeRange(14,00,15,59)){
        return dummyProxy();
    } else if (timeRange(15, 20)){
        return noGo(url, host);
    } else if (timeRange(21, 01 , 23, 59)) {
        return dummyProxy();
    } else {
        return "DIRECT";  
    }
}

