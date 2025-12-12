const album = getQueryString().get("album");
const song = getQueryString().get("song");

async function getAlbumData(album) {
    const response = await fetch('../../resources/albums/albumData.json');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const json = await response.json();
    if (!json[album]) window.location.href = "../";

    return json[album];
}

async function insertSongData() {
    const albumData = await getAlbumData(album);

    insertNameAndPicture();

    // Functions
    function insertNameAndPicture() {
        const albumLink = document.getElementById("albumName");
        albumLink.href = `../album/?album=${album}`;
        albumLink.textContent = albumData.name;
        document.getElementById("songName").innerText = ` > ${albumData.name}`;

        document.getElementById("albumCover").src = `../../images/albums/${albumData.id}.jpg`;
        document.getElementById("albumCover").classList.remove("albumPageContentHidden");
    }
}

function goToAlbum() {
    window.location.href = "../album/?album=" + encodeURIComponent(album);
}

function getQueryString() {
    return(new URLSearchParams(window.location.search));
}

insertSongData();
