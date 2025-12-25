async function insertMusicLinks() {
    try {
        const response = await fetch('links/links.json');
        const links = await response.json();

        const insertionDiv = document.getElementById('musicServices');
        Object.entries(links.music).forEach(([key, { name, link }]) => {
            const linkElement = createLinkElement(name.replace(/ /g, '-'), link, "musicServiceButton");
            insertionDiv.appendChild(linkElement);
        });
    } catch (error) {
        console.error('Failed to insert links:', error);
    }
}

async function loadAlbums() {
    const response = await fetch('resources/albums/albumData.json');
    const albumData = await response.json();

    const albumsArray = Object.values(albumData);

    albumsArray.sort((a, b) => {
        const dateA = new Date(a.publishDate.split('.').reverse().join('-')); // "dd.mm.yyyy" to "yyyy-mm-dd"
        const dateB = new Date(b.publishDate.split('.').reverse().join('-'));
        return dateB - dateA; // Sort by the newest date
    });

    const newestAlbums = albumsArray.slice(0, 2);

    const albumLinks = [
        document.getElementById('albumLink1'),
        document.getElementById('albumLink2')
    ];
    const albumCovers = [
        document.getElementById('albumCover1'),
        document.getElementById('albumCover2')
    ];

    newestAlbums.forEach((album, i) => {
        albumLinks[i].href = `musik/album/?album=${album.name.toLowerCase().replace(/ /g, "-")}`;
        albumCovers[i].src = `images/albums/preview/${album.id}_preview.webp`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loadAlbums();
    insertMusicLinks();
});