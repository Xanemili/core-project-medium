window.addEventListener('DOMContentLoaded', async (e) => {
    try {
    const res2 = await fetch(`/api${window.location.pathname}`, {
    });
    console.log(res2);
    const babbles = await res2.json();

const searchContainer = document.querySelector('.search-container')
for (let i = 0; i < babbles.length; i++) {
    const date = new Date(Date(babbles.updatedAt))
    const babbleContainer = document.createElement('div');
    babbleContainer.classList.add('babble-container')
    const babbleDiv = document.createElement('div');
    const babbleLeftDiv = document.createElement('div');
    const babbleRightDiv = document.createElement('div');
    const babbleTitleDiv = document.createElement('div');
    const babbleSubHeaderDiv = document.createElement('div');
    const babbleTimestampDiv = document.createElement('div');
    const readTimeDiv = document.createElement('div');

    const babbleAnchor = document.createElement('a');
    const babbleImgUrl = document.createElement('img');
    const babbleImgDiv = document.createElement('div');

    babbleAnchor.classList.add('babble-anchor')
    babbleDiv.classList.add('bottom-div-container');
    babbleLeftDiv.classList.add('bottom-left-div-container');
    babbleRightDiv.classList.add('bottom-right-div-container');
    babbleTitleDiv.classList.add('babble-title-div');
    babbleSubHeaderDiv.classList.add('sub-title-div');
    babbleTimestampDiv.classList.add('timestamp-div');
    readTimeDiv.classList.add('read-time-div')
    babbleImgDiv.classList.add('babble-img-div');
    babbleImgUrl.classList.add('babble-img');

    const babbleTitle = babbles[i].title;
    const babbleSubHeader = babbles[i].subHeader;


    const babbleTimestamp = `${date.getMonth() + 1 }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    const babbleReadTime = babbles[i].readTime;

    babbleTitleDiv.innerHTML = babbleTitle;
    babbleSubHeaderDiv.innerHTML = babbleSubHeader;
    babbleTimestampDiv.innerHTML = `Created on ${babbleTimestamp}`;
    readTimeDiv.innerHTML = `Reading time: ${babbleReadTime} minutes`;
    babbleImgUrl.setAttribute('src', babbles[i].url);
    babbleAnchor.setAttribute('href', `/babbles/${babbles[i].id}`)


    babbleAnchor.append(babbleImgUrl)
    babbleImgDiv.append(babbleAnchor);

    babbleRightDiv.append(babbleImgDiv);

    babbleLeftDiv.append(babbleTitleDiv);
    babbleLeftDiv.append(babbleSubHeaderDiv);
    babbleLeftDiv.append(babbleTimestampDiv);
    babbleLeftDiv.append(readTimeDiv)

    babbleDiv.append(babbleLeftDiv);
    babbleDiv.append(babbleRightDiv);
    babbleContainer.append(babbleDiv);

    searchContainer.append(babbleDiv)


    }


} catch(err) {
    console.error(err)
}
});
