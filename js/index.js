/**
 * Created by Administrator on 2016/8/26.
 */
$(function () {
    banner();
})
function banner() {
    /*1.ͼƬ����  ������� ���ݽṹ*/
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
    /*��Ⱦ�ķ���*/
    var renderHtml = function () {
        /*�жϵ�ǰ���豸*/
        var width = $(window).width();
        /*�ǲ����ƶ���*/
        var isMove = width >= 768 ? false : true;
        /*׼��ģ��*/
        /*��ȡģ����ַ�������*/
        var pointStr=$('#point_template').html();
        var imageStr=$('#image_template').html();
        /*3.ת����ģ�淽��*/
        var pointFcn= _.template(pointStr);
        var imageFcn= _.template(imageStr);
        /*4.������html�ṹ*/
        var pointHtml=pointFcn({model:imageList});
        var imageHtml=imageFcn({model:imageList,isMove:isMove});
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }
    $(window).on('resize',function(){
        renderHtml();    }).trigger('resize');
}
