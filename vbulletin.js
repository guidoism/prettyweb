$(document).ready(function() {
    var url = "http://www.vansairforce.com/community/forumdisplay.php?f=2";
    $("#topic_index").load(url + " #threadslist", function() {
        $(this).find("tr").first().remove();
        $(this).find("td[id^=td_threadstatusicon_]").next().remove();
        $(this).find("td[id^=td_threadstatusicon_]").remove();
        $(this).find("img").remove();
        $(this).find("span:contains('Last Page')").remove();
        $(this).find("td").removeAttr("title");
        $(this).find("a[id^=thread_title_]").replaceWith(function() {
            return "<a href=\"topic/"
                + $(this).attr("href").split("=").pop()
                + "/\">"
                + $(this).text()
                + "</a>"
        });
        return true;
    });
    return true;
});
