$$(".w-dyn-item").filter(x => x.querySelector('.w2-speaker-name:not(.modal)')).map(x => ({
    name: x.querySelector('.w2-speaker-name')?.textContent?.trim(),
    details: x.querySelector('.speaker-details-text')?.textContent?.trim(),
    social: Array.from(x.querySelectorAll('.w2-speaker-meta > div:not([class]) > a[href*="//"]')).map(x => x.href)
}))