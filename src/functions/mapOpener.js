function mapOpener(lat, log) {
    const userAgent = typeof window !== 'undefined' && navigator.userAgent;
    console.log(userAgent)
    if (userAgent && userAgent.match(/Windows/i)) {
        return `bingmaps:?cp=${lat}~${log}&lvl=16`;
    } else if (userAgent.match(/iPhone|iPad|iPod|Macintosh/i)) {
        return `http://maps.apple.com/?ll=${lat},${log}&z=16`;
    } else {
        return `geo:${lat},${log}?z=16`;
    }
}

export default mapOpener;
