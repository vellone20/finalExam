$(function(){
    $.getJSON("api/countries", displayCountryTable);
});

function displayCountryTable(data) {
    console.log(data);

    let country = data["_embedded"].countries;

    if(country.length > 0){
        $("#no_data_message").hide();

        let tbody$ = $("#data_table tbody");

        tbody$.html("");
        country.forEach(function(c, index){

            let link = c["_links"].self.href;

            tbody$.append(
                `<tr>
                    <th scope="row" class="align-middle">${index + 1}</th>
                    <td class="align-middle">${c.name}</td>
                    <td class="align-middle">${c.region}</td>
                    <td>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="CountryDetails.html" data-link="${link}" style="color: hotpink"> 
                                <i class="material-icons">help_outline</i>&nbsp;Details</a>
                            </li>
                        </ul>
                    </td>
                </tr>`);
        });
        $("#data_table a").click(function(){
            localStorage["country-data-link"] = $(this).data("link");
        });
    }
    else {
        $("#data_table").hide();
    }
}