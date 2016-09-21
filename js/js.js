$("#left .choice a ").click(function(){
    if($(this).hasClass('checked'))
        $(this).removeClass("checked");
    else
        $(this).addClass("checked");
})
$('#left ul').mouseenter(function(){
    $(this).css({height:"88px"})
    $("#left ul").append($('#left .li1'));
    $('#left .li1').css({border:"1px solid #a0a0a0"})
})
$('#left ul').mouseleave(function(){
    $(this).css({height:"22px"})
    $("#left ul").prepend($('#left .li1'));
    $('#left .li1').css({border:" none"})
})

$('#right .set input').click(function(){
    if($(this).hasClass('current'))
        $(this).removeClass('current');
    else
        $(this).addClass('current');
})
console.log($('#right').children('input').val())
$('#right .txt3').keydown(function(e){
    var event=window.event||e;
    var keyCode=event.which || event.keyCode;
    if(keyCode==13 || keyCode==32){
        var li=document.createElement('li');
        var Val= $.trim($('#right .txt3').val());
        var lisArr=$('#right .r-main li');
        for(var i=0;i<lisArr.length;i++){
            var every=lisArr[i].getElementsByTagName('span')[0].innerHTML;
            if(Val==every)
                return alert('请勿输入重复内容！');
        }
        if(Val=="")
            return  alert('请输入非空内容!');
        li.innerHTML="<span>"+Val+"</span><i>x</i>";
        $('#right .r-main ul').append(li);
        $('#right .txt3').value='';
    }
})
$('#right .r-main ul').click(function(e)
{
    var event=window.event||e;
    var target=event.target||event.srcElement;
    if(target.nodeName.toLowerCase()=='i')
        target.parentNode.remove();
})
$('#right .txt3').focus(function(){
    var Val= $.trim(this.value);
    if(Val=='请输入文章标签')
        this.value='';
})
$('#right .txt3').blur(function(){
    var Val= $.trim(this.value);
    if(Val=='')
        this.value='请输入文章标签';
})
