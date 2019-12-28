function initializeTable() {
    $('#createLink').on('click', createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscva');

    hideBtn();

    function addCountryToTable(country, town) {
        let tableRow = $('<tr>')
            .append(`<td>${country}</>`)
            .append(`<td>${town}</>`)
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').on('click', moveUp))
                .append($('<a href="#">[Down]</a>').on('click', moveDown))
                .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));

        tableRow.css('display', 'none');
        $('#countriesTable').append(tableRow);
        tableRow.fadeIn(2000)
    }

    function createCountry() {

        let country = $('#newCountryText');
        let town = $('#newCapitalText');
        addCountryToTable(`${country.val()}`, `${town.val()}`);
        country.val('');
        town.val('');
        hideBtn()
    }

    function moveUp() {

        let row = $(this).parent().parent()

        row.fadeOut(function () {
            row.insertBefore(row.prev());

            hideBtn()
            row.fadeIn(2000)
        })


    }

    function moveDown() {

        let row = $(this).parent().parent()
        if (row.net !== '') {
            row.insertAfter(row.next());
        }
        hideBtn()


    }

    function deleteRow() {
        $(this).fadeOut(function(){
            $(this).parent().parent().remove();
            hideBtn()
        })
       

       
    }

    function hideBtn() {
        $('#countriesTable a').css('display', '');
        $('#countriesTable tr:eq(2) a:contains("Up")').css('display', 'none');
        $('#countriesTable tr:last a:contains("Down")').css('display', 'none');
    }


}