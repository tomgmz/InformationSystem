$(document).on('click','#btnDelete', function (e)
{
    e.preventDefault();

    var id = $(this).val();
    console.log(id);
    if(confirm("Are you sure to delete this item?"))
    {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: {
                'delete_data': true,
                'data_id': id
            },
            success: function(response){
                var result = jQuery.parseJSON(response);
                if(result.status == 500)
                {
                    alert.message(result.message);
                }
                else
                {
                    alert(result.message);
                    $("#information-table").load(location.href + " #information-table");
                }
            }
        });
    }
});