/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    banner();
})
function banner() {
    /*1.图片数据  抽象出来 数据结构*/
    var imageList = [
        {
            pcImg: 'zmimg/zm_b1.jpg',
            mImg: 'zmimg/dxzm_b2sm1.jpg'
        },
        {
            pcImg: 'zmimg/xt_b1.jpg',
            mImg: 'zmimg/pixelphone_sm.jpg'
        },
        {
            pcImg: 'zmimg/Home_laucher.jpg',
            mImg: 'zmimg/sp_b1_sm.jpg'
        },
        {
            pcImg: 'zmimg/Home_pixelphone.jpg',
            mImg: 'zmimg/launcher-sm.png'
        },
        {
            pcImg: 'zmimg/sp_b1.jpg',
            mImg: 'zmimg/tq_b1_sm.jpg'
        }
    ]
    /*渲染的方法*/
    var renderHtml = function () {
        /*判断当前的设备*/
        var width = $(window).width();
        /*是不是移动端*/
        var isMove = width >= 768 ? false : true;
        /*准备模板*/
        /*获取模板的字符串内容*/
        var pointStr=$('#point_template').html();
        var imageStr=$('#image_template').html();
        /*3.转化成模版方法*/
        var pointFcn= _.template(pointStr);
        var imageFcn= _.template(imageStr);
        /*4.解析成html结构*/
        var pointHtml=pointFcn({model:imageList});
        var imageHtml=imageFcn({model:imageList,isMove:isMove});
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }
    $(window).on('resize',function(){
        renderHtml();    }).trigger('resize');
}
