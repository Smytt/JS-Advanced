class PaymentManager {
    constructor(title) {
        this.title = $('<caption>').text(title + ' Payment Manager')
        this.table = $('<table>')
    }

    render(selectorId) {
        let addBtn = $('<button>').text('Add')

        function addToTable() {
            let name = $(this).closest('table').find('input[name=name]').val()
            let category = $(this).closest('table').find('input[name=category]').val()
            let price = Number($(this).closest('table').find('input[name=price]').val())

            if(name === '' || category === '' || $(this).closest('table').find('input[name=price]').val() === '')
                return

            let row = $('<tr>')
            let delBtn = $('<button>').text('Delete')
            delBtn.click(deleteRow)
            row
                .append($(`<td>${name}</td>`))
                .append($(`<td>${category}</td>`))
                .append($(`<td>${price}</td>`))
                .append($(`<td>`)
                    .append(delBtn))
            $(this).closest('table').find('.payments').append(row)

            $(this).closest('table').find('input[name=name]').val('')
            $(this).closest('table').find('input[name=category]').val('')
            $(this).closest('table').find('input[name=price]').val('')

            function deleteRow() {
                $(this).closest('tr').remove()
            }
        }

        addBtn.click(addToTable)
        this.table
            .append(this.title)
            .append($('<thead>')
                .append($('<tr>')
                    .append($('<th class="name">Name</th>'))
                    .append($('<th class="category">Category</th>'))
                    .append($('<th class="price">Price</th>'))
                    .append($('<th>Actions</th>'))
                ))
            .append($('<tbody>').addClass('payments'))
            .append($('<tfoot class="input-data">')
                .append($('<tr>')
                    .append($('<td><input name="name" type="text"></td>'))
                    .append($('<td><input name="category" type="text"></td>'))
                    .append($('<td><input name="price" type="number"></td>'))
                    .append($('<td>')
                        .append(addBtn))
                ))

        $('#' + selectorId).append(this.table)
    }
}