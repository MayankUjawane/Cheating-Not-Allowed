fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log("got i[", data.ip);
        userIP = data.ip;

        chrome.storage.local.set({ key: userIP }).then(() => {
            console.log("Value is set to " + userIP);
        });

    })

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.url);
        if (request.message == "Found") {
            alert("Double Click to start the test");

            document.addEventListener("dblclick", () => {
                document.documentElement.webkitRequestFullscreen()
                    .catch((e) => {
                        console.log(e);
                    });
            })
        } else {
            console.log(request.message);
        }
    }
);
