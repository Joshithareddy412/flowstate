const https = require('https');
const fs = require('fs');

const url = 'https://flowstate-c0c021.webflow.io/';

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('flowstate.html', data);
        console.log('Saved flowstate.html');

        const cssLinks = [...data.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/ig)]
                         .map(m => m[1]);

        cssLinks.forEach((cssUrl, i) => {
            if (cssUrl.startsWith('//')) cssUrl = 'https:' + cssUrl;
            else if (cssUrl.startsWith('/')) cssUrl = new URL(cssUrl, url).toString();

            https.get(cssUrl, (cssRes) => {
                let cssData = '';
                cssRes.on('data', chunk => cssData += chunk);
                cssRes.on('end', () => {
                    fs.writeFileSync(`flowstate_${i}.css`, cssData);
                    console.log(`Saved flowstate_${i}.css`);
                });
            }).on('error', e => console.error(e));
        });
    });
}).on('error', e => console.error(e));
