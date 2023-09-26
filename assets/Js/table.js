   // Formatting function for row details - modify as you need
   function format(d) {
    // `d` is the original data object for the row
    var tableHtml = `<div class="slider"><table class="extendedTable">
        <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Attachments</th>
        </tr>
        </thead>
        <tbody>`;

    d.forEach((data) => {
        tableHtml += `<tr>
                <td>${data.date}</td>
                <td>${data.description}</td>
                <td><a href="${data.attachments}"><i class="bi-eye-fill"></i> VIEW</a></td>
                </tr>`;
    })

    tableHtml += `</tbody></table>
     
    <div class="show-all-notifications-btn"><button>Show More <img src="assets/images/show-more.svg" class="ms-2"/> </button></div>
    
    </div>`;

    return tableHtml;
}

const table = new DataTable('#example', {
    // responsive: true
    scrollX: true,
    order: [[1, 'asc']],
    columnDefs: [
        { targets: 'no-sort', orderable: false },
        {
            className: 'dt-control',
            orderable: false,
            targets: 0,// Adjust the target column as needed

        }

    ],
    language: {
        searchPlaceholder: "Search here..."
    }
});

const data = [
    { 'date': '20-09-2023', 'description': "Lorem Ipsum is simply dummy text of the dummy text ever since the 1500s", 'attachments': 'https://google.com' },
    { 'date': '20-09-2023', 'description': "Lorem Ipsum is simply dummy text of the dummy text ever since the 1500s 2", 'attachments': 'https://youtube.com' },
    { 'date': '20-09-2023', 'description': "Lorem Ipsum is simply dummy text of the dummy text ever since the 1500s", 'attachments': 'https://google.com' },
    { 'date': '20-09-2023', 'description': "Lorem Ipsum is simply dummy text of the dummy text ever since the 1500s 2", 'attachments': 'https://youtube.com' },
    { 'date': '20-09-2023', 'description': "Lorem Ipsum is simply dummy text of the dummy text ever since the 1500s 2", 'attachments': 'https://youtube.com' }
]

// Add event listener for opening and closing details
table.on('click', 'td.dt-control', function (e) {
    let tr = $(this).closest('tr');
    let row = table.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        $('div.slider', row.child()).slideUp(function () {
            row.child.hide();
            tr.removeClass('shown');

            tr.find("td:first-child").removeClass("selected-col")
            tr.removeClass("selected-row")
        });
    }
    else {
        // Open this row
        row.child(format(data), 'no-padding').show();

        tr.addClass('shown');

        tr.find("td:first-child").addClass("selected-col")
        tr.addClass("selected-row")

        $('div.slider', row.child()).slideDown();

        new DataTable($(this).closest('tr').next().find(".extendedTable"), {
            info: false,
            // ordering:false,
            paging: false,
            searching: false,
            lengthChange: false
        })
    }
});
