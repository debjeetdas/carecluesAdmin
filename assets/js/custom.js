 $(document).ready(function(){
    var triggers = $('ul.alphabet li a');
    // var filters = $('ul.medical_dictionary li strong');
    var filters = $('.nameSearch');
    triggers.click(function() {
        var takeLetter = $(this).text();
        var found = false;
        filters.closest('.doc-det').hide();
        if($(this).parent('li').siblings().hasClass('srchActive')){
            $(this).parent('li').siblings().removeClass('srchActive');
            $(this).parent('li').addClass('srchActive');
        }
        else{
            $(this).parent('li').addClass('srchActive');
        }
        filters.each(function(i) {
            var compareFirstLetter = $(this).text().substr(0,1);
            if ( compareFirstLetter ==  takeLetter ) {
                $(this).closest('.doc-det').fadeIn(222);
                found = true;
            }
        });
        if(takeLetter.toLowerCase() === "all"){
            filters.closest('.doc-det').show();
        }
        if (!found) {console.log('There is no result.');}
    });
    $(".search-criteria").keyup(function () {
        var filter = $(this).val();
        filters.each(function () {
            if ($(this).parent('.profile-detail').text().search(new RegExp(filter, "i")) < 0) {
                $(this).closest('.doc-det').hide();
            } else {
                $(this).closest('.doc-det').show();
            }
        });
    });
    $('.alphabet li:nth-child(1) a').trigger('click');
});