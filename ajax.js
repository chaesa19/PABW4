$(document).ready(function(){
    $.ajax({
        url: "index.php",
        type: "GET",
        dataType: "json",
        success: function(data){
            var html = "<table><tr><th>ID</th><th>Nama Barang</th><th>Harga</th><th>Aksi</th></tr>";
            $.each(data, function(index, item){
                html += "<tr>";
                html += "<td>" + item.id + "</td>";
                html += "<td>" + item.nama_barang + "</td>";
                html += "<td>" + item.harga + "</td>";
                html += "<td><button class='hapus' data-id='" + item.id + "'>Hapus</button></td>";
                html += "</tr>";
            });
            html += "</table>";
            $("#tabel_barang").html(html);
        },
        error: function(xhr, status, error){
            console.error("Terjadi kesalahan: " + error);
        }
    });
});
