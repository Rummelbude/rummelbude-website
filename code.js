function redirect(url) {
    window.location.href = url;
}

document.write('\
\
    <div id="footer">\
            <table id="footertable">\
                <tr id="tableheading">\
                    <th>Support</th>\
                    <th>Navigation</th>\
                    <th>Rechtliches</th>\
                </tr>\
                <tr>\
                    <th><a href="mailto:sup.rummelbude_musik@gmx.de">E-Mail</a></th>\
                    <th><a href="/website/musik">Musik</a></th>\
                    <th>Copyright © 2023-2024 Rummelbude</th>\
                </tr>\
                <tr>\
                    <th><a href="/website/support">Support</a></th>\
                    <th><a href="/website/diskografie">Diskografie</a></th>\
                    <th>(sofern nicht anders angegeben)</th>\
                </tr>\
                <tr>\
                    <th></th>\
                    <th><a href="/website/support">Support</a></th>\
                </tr>\
                <tr>\
                    <th></th>\
                    <th><a href="/website/newsletter">Newsletter</a></th>\
                </tr>\
            </table>\
        </div>\
\
');