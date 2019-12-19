const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'],

    keys = document.querySelectorAll('.key'),
    whiteKeys = document.querySelectorAll('.white'),
    blackKeys = document.querySelectorAll('.black');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key,
        whiteKeyIndex = WHITE_KEYS.indexOf(key),
        blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}
