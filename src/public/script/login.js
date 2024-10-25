document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        //Nếu sử dụng jQuey thì bắt sự kiện bằng cách VD: .change or .click
        var checkbox_remember = $('#check-remember-me');
        var checkmark_remember_me = $('.checkmark-remember-me');
        checkmark_remember_me.click(function () {
            checkbox_remember.prop('checked', !checkbox_remember.prop('checked'));
        });
        // checkbox_remember.change(function () {});
    });
});
