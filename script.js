var blocker = () => {
    let m = window.open('','','HEIGHT=1,WIDTH=1');
    m.document.write('<!DOCTYPE html><html><head><script src="script.js"></script><title>LANSCHOOL WORKER! DONT CLOSE!</title></head><body onclick="start()"><a id="text">CLICK ME TO START BLOCKING LANSCHOOL VIEW!</a></body></html>');
    setInterval(() => {
        document.write("CLOSE THIS TAB NOW!<br>");
    }, 100);
    close();
}
var x = 0;
var s = 1;
var start = () => {
    onfocus = () => {
        s = 1;
    }
    onblur = () => {
        s = 0;
        setTimeout(() => {
            if(s == 0) {
                let w = window.open('','','HEIGHT=1,WIDTH=1');
                w.document.write('<!DOCTYPE html><html><head><script src="script.js"></script><title>LANSCHOOL WORKER! DONT CLOSE!</title></head><body><script>setTimeout(() => {start();},1000);</script><a>LANSCHOOL WORKER DONT CLOSE!</a></body></html>');
                close();
            }
        }, 2000);
    }
    if(x == 1) return 0;
    setInterval(() => {
        let w = window.open('','','HEIGHT=1,WIDTH=1');
        w.resizeTo(w.outerWidth * 2,window.outerHeight);
        w.moveTo(screen.width - w.outerWidth,0);
        w.close();
    }, 1000);
    document.getElementById("text").innerText = "LANSCHOOL WORKER! DONT CLOSE!";
    x = 1;
}