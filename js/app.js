<script>
function searchMenu() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".menu_list li");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
</script>
