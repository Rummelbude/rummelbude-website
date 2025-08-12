async function getRedirects(path = '/resources/redirects/redirects.json') {
    const res = await fetch(path, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status} ${res.statusText}`);
    const json = await res.json();
    return json.redirects;
}


function redirect(redirects) {
    redirects.forEach(({ source, target }) => {
        if (window.location.host === source) window.location.replace(target + window.location.pathname);
    });

}

getRedirects().then(redirect);