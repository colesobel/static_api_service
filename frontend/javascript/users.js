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
            var curId
            for (prop in account.user_data) {
                if (prop === 'id') {
                    curId = account.user_data[prop]
                }
                var td = document.createElement('td')
                if (prop === 'first_name') {
                    $(td).html(`<a href="http://localhost:3000/users/${curId}" > ${account.user_data[prop]}</a>`)
                } else {
                    $(td).html(account.user_data[prop])
                }
                $(tr).append(td)
            }
            $('table').append(tr)
        })
    }

})
