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

    return directProxy();
};

//Return proxy processing by url
function noGo(url, host){
    if ( 
        shExpMatch(url, "*v.qq.com*") ||
        shExpMatch(url, "*y.qq.com*") ||
        shExpMatch(url, "*kantu.qq.com*") ||
        shExpMatch(url, "*qqchess.qq.com*") ||
        shExpMatch(url, "*pm.myapp.com*") ||
        shExpMatch(url, "*dldir*.qq.com*") ||
        shExpMatch(url, "*mac.qq.com*") ||
        shExpMatch(url, "*pc.qq.com*") ||
        shExpMatch(url, "*pay.qq.com*") ||
        shExpMatch(url, "*shuoshuokong.com*") ||
        shExpMatch(url, "*17qq.com*") || 
        shExpMatch(url, "*buluo.qq.com*") ||
        shExpMatch(url, "*vip.qq.com*") ||
        shExpMatch(url, "*id.qq.com*") ||
        shExpMatch(url, "*qqwmly.com*") ||
        shExpMatch(url, "*keaidian.com*") ||
        shExpMatch(url, "*haokan.baidu.com*") ||
        shExpMatch(url, "*kuaikanmanhua.com*") ||
        shExpMatch(url, "*woyaogexing.com*") ||
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
        shExpMatch(url, "*xiami.com*") ||
        shExpMatch(url, "*kugou.com*") ||
        shExpMatch(url, "*duitang*")
    ) {
        return directProxy();
    } else { 
        return directProxy();
    };
};

//Always return dummy proxy, means can't go online.
function dummyProxy(){
    return "PROXY 192.168.1.1:8080";
};

function directProxy() {
    return "DIRECT";
}

//Each weekday processing
function noGoSun(url, host){
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
}

function noGOMon(url, host) {
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
};

function noGoTue(url, host) { 
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
};

function noGoWed(url, host){
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
};

function noGoThu(url, host){
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
};

function noGoFri(url, host){
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
};

function noGoSat(url, host){
    if (timeRange(00,01,19,59)) {
        return noGo(url, host);
    } else if (timeRange(20,00,21,00)) {
        return directProxy();
    } else { 
        return dummyProxy();
    }
}

