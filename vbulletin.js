$(document).ready(function() {
    var url = "http://www.vansairforce.com/community/forumdisplay.php?f=2";
    $("#topic_index").load(url + " #threadslist", function() {
        $(this).find("tr").first().remove();
        $(this).find("td[id^=td_threadstatusicon_]").next().remove();
        $(this).find("td[id^=td_threadstatusicon_]").remove();
        $(this).find("img").remove();
    });
});
