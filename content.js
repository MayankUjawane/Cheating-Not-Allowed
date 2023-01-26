fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log("got i[", data.ip);
        userIP = data.ip;

        chrome.storage.local.set({ key: userIP }).then(() => {
            console.log("Value is set to " + userIP);
        });

    })

let fullScreen = false;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.url);
        if (request.message == "Found") {
            alert("Double Click to start the test");

            document.addEventListener("dblclick", () => {
                if (fullScreen === false) {
                    document.documentElement.webkitRequestFullscreen()
                        .catch((e) => {
                            console.log(e);
                        });

                    fullScreen = true;
                    alert("Double click to end the test.");
                } else {
                    document.exitFullscreen();
                    fullScreen = false;
                    alert("Test Completed");
                }
            })
        } else {
            console.log(request.message);
        }
    }
);
