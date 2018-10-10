    function getUsers() 
    {
        let select = $('#select-user');
        
        select.empty();                    
        select.append('<option selected="true" disabled>Vælg bruger</option>');
        select.prop('selectedIndex', 0);
        
        const url = "./../resources/users.json";
        
        // Populate select with list of users
        $.getJSON(url, function (data) {
            $.each(data, function (key, entry) {
                select.append($('<option></option>').attr('value', entry.user).text(entry.name));
            })
        });
    };

    window.addEventListener("load", function(){
        document.getElementById("select-user").addEventListener("click", getUsers);
    });