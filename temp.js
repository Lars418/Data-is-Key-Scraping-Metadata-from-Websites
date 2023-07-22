import { promises as fs } from "fs";

(async () => {
    const RESULT = [];
    const rawFile = await fs.readFile('./out/wadCongressSpeakersPersonalSocials.json');
    const file = Buffer.from(rawFile);
    const socialUrls = JSON.parse(file);

    for (const url of socialUrls) {
        const response = await fetch(`http://localhost:3000/preview/?url=${encodeURIComponent(url)}`);
        console.log('Fetched url: ' + url);

        if (!response.ok) {
            console.log('Bad Response Code for url: ' + url);
        }

        try {
            const result = await response.json();
            RESULT.push({
                url,
                preview: result
            });
        } catch (e) {
            console.log('Error for url: ' + url);
            console.log(e);
        }
    }

    await fs.writeFile('./out/wadCongressSpeakersPersonalSocials_linkPreviews2.json', JSON.stringify(RESULT, null, 2));
})()
