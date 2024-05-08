var blocker = () => {
    let m = window.open('','','HEIGHT=1,WIDTH=1');
    m.document.write('<!DOCTYPE html><html><head><script src="script.js"></script><title>LANSCHOOL WORKER! DONT CLOSE!</title></head><body onclick="start()"><a id="text">CLICK ME TO START BLOCKING LANSCHOOL VIEW!</a></body></html>');
    setInterval(() => {
        document.write("CLOSE THIS TAB NOW!<br>");
    }, 100);
    close();
}
var pause = () => {
    let w = window.open('','','HEIGHT=1,WIDTH=1');
    w.document.write('<script src="script.js"></script><body onclick="start()"><a>CLICK ME TO UNPAUSE!</a></body>');
    close();
}
var renew = () => {
    let w = window.open('','','HEIGHT=1,WIDTH=1');
    w.document.write('<!DOCTYPE html><html><head><script src="script.js"></script><title>LANSCHOOL WORKER DONT CLOSE!</title></head><body onclick="pause()"><script>setTimeout(() => {start();},1000);</script><a>DONT CLOSE!<br><br>CLICK ME TO PAUSE VIEW BLOCK!</a></body></html>');
    close();
}
var start = () => {
    setTimeout(renew(),1000);
}
