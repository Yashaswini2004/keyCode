document.addEventListener("keypress", (e) => {
    const key = e.key; // Get the pressed key
    const asciiValue = key.charCodeAt(0); // Get ASCII value of the key
    document.querySelector(".text1").innerText = "key:"+key+" "+"value:"+asciiValue; // Display ASCII value
});
