function getvisitcount() {
    let count = localStorage.getItem('visitcount');

    if (count) {
        count ++;
    } else {
        count = 1;
    }

    localStorage.setItem('visitcount', count);

    return count;
}

let visitcount = getvisitcount();
document.querySelector('#count').textContent = visitcount;