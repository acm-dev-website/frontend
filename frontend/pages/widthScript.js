function updateScreenWidth() {
    // Get the width of the screen
    let screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth > 1200)
        screenWidth = 1200;

    // Set the screen width as a CSS variable
    document.documentElement.style.setProperty('--screen-width', `${screenWidth}px`);
    console.log("Width is %d", screenWidth);

    const scale = screenWidth/1200;
    document.documentElement.style.setProperty('--screenScale', `${scale}`);
    console.log("Scale is %f", scale);
}

// Call the function initially to set the CSS variable
updateScreenWidth();

// Add event listener for window resize
window.addEventListener('resize', updateScreenWidth);