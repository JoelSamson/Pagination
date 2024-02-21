let currentPage = 1;
const totalPages = 201;
const pagesPerSection = 5;

createPagination();

function createPagination() {
    const paginationElement = document.getElementById("pagination");
    paginationElement.innerHTML = `
        <button onclick="goToFirstPage()">First</button>
        <button onclick="prevPage()">Prev</button>
    `;
    
    const totalSections = Math.ceil(totalPages / pagesPerSection);
    const currentSection = Math.ceil(currentPage / pagesPerSection);
    const startPage = (currentSection - 1) * pagesPerSection + 1;
    const endPage = Math.min(startPage + pagesPerSection - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        paginationElement.innerHTML += `
            <button ${currentPage === i ? 'style="border: 1px solid black;"' : ''} onclick="goToPage(${i})">${i}</button>
        `;
    }

    paginationElement.innerHTML += `
        <button onclick="nextPage()">Next</button>
        <button onclick="goToLastPage()">Last</button>
    `;
}

function goToPage(page) {
    currentPage = page;
    createPagination();
}

function prevPage() {
    currentPage = Math.max(currentPage - 1, 1);
    createPagination();
}

function nextPage() {
    currentPage = Math.min(currentPage + 1, totalPages);
    createPagination();
}

function goToFirstPage() {
    currentPage = 1;
    createPagination();
}

function goToLastPage() {
    currentPage = totalPages;
    createPagination();
}
