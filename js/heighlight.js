const file = 'https://samples.ffmpeg.org/MPEG-4/MPEGSolution_jurassic.mp4';

window.fetch(file, { mode: 'no-cors' })
    .then((response) => response.blob())
    .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const iframe = document.createElement('iframe');

        iframe.addEventListener('error', (event) => {
            let error = event;

            // Chrome v60
            if (event.path && event.path[0]) {
                error = event.path[0].error;
            }

            // Firefox v55
            if (event.originalTarget) {
                error = error.originalTarget.error;
            }

            // Here comes the error message
            alert(`iframe error: ${error.message}`);

            window.URL.revokeObjectURL(url);
        }, true);

        iframe.src = url;
        document.body.appendChild(iframe);
    });