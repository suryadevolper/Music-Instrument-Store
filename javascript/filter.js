function filterProducts() {
    const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseInt(document.getElementById("maxPrice").value) || Infinity;

    const selectedBrands = [];
    if (document.getElementById("yamaha").checked) selectedBrands.push("Yamaha");
    if (document.getElementById("fender").checked) selectedBrands.push("Fender");
    if (document.getElementById("givson").checked) selectedBrands.push("Givson");
    if (document.getElementById("Kadence").checked) selectedBrands.push("Kadence");

    const products = document.querySelectorAll(".box");

    products.forEach(product => {
        const priceText = product.querySelector("small i b").textContent.replace("₹", "").replace(",", "");
        const price = parseInt(priceText);

        const title = product.querySelector("h5").textContent;
        const isBrandMatch = selectedBrands.length === 0 || selectedBrands.some((brand) => title.includes(brand));



        const isPriceMatch = price >= minPrice && price <= maxPrice;

        if (isBrandMatch && isPriceMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}





function changehambuger() {
    let filter = document.getElementById("filter_total");

    filter.style.display = "block";
}