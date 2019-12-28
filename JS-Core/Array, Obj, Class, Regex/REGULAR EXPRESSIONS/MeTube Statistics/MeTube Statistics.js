function solve(input) {
    let mapLikes = new Map();
    let mapViews = new Map;

    let printType = input.pop();
    input.pop();

    for (let text of input) {
        if (text.includes('-')) {
            let token = text.split('-');
            let videoName = token[0];
            let view = Number(token[1]);

            if (mapViews.has(videoName) === false) {
                mapViews.set(videoName, view);
                mapLikes.set(videoName, 0);
            } else {
                let vieww = mapViews.get(videoName) + view;
                mapViews.set(videoName, vieww);
            }

        } else if (text.includes(':')) {
            let token = text.split(':');

            let type = token[0];
            let name = token[1];

            if (mapLikes.has(name)) {
                if (type === 'like') {
                    let like = mapLikes.get(name) + 1;
                    mapLikes.set(name, like);
                } else {
                    let like = mapLikes.get(name) - 1;
                    mapLikes.set(name, like);
                }
            }
        }
    }

    if (printType === 'by likes') {
        let sorted = [...mapLikes.entries()].sort((a, b) => b[1] - a[1]);

        for (let [key, value] of sorted) {

            console.log(`${key} - ${mapViews.get(key)} views - ${value} likes`);
        }
    }else {
        let sorted = [...mapViews.entries()].sort((a, b) => b[1] - a[1]);

        for (let [key, value] of sorted) {
            console.log(`${key} - ${value} views - ${mapLikes.get(key)} likes`);
        }
    }
}
solve([ 'Eninem Venom-500',
    'like:Eninem Venom',
    'Funny Cats-700',
    'like:Funny Cats',
    'like:Funny Cats',
    'Eninem Venom-300',
    'stats time',
    'by likes' ]);