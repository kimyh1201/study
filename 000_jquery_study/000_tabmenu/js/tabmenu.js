$(function(){
	$('ul.panel > li:not('+$('ul.tab >li a.selected').attr('href')+')').hide();
	$('ul.tab > li a').click(function(){
		$('ul.tab > li a').removeClass('selected');
		$(this).addClass('selected');
		$('ul.panel> li').hide();
		$($(this).attr('href')).show();
		return false;
	})
});	