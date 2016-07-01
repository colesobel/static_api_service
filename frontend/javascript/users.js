$(document).ready(function() {

    $.ajax({
        url: 'http://localhost:3000/users',
        success: function(data) {
            appendData(data)
        }
    })

    function appendData(data) {

        data.forEach(function(account) {
            var tr = document.createElement('tr')
            for (prop in account.user_data) {
                var td = document.createElement('td')
                $(td).html(account.user_data[prop])
                $(tr).append(td)
            }
            $('table').append(tr)
        })
    }

})
