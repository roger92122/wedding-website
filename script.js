// RSVP FORM HANDLER
html {
    scroll-behavior: smooth;
}

document.getElementById("rsvp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;

    const msg =
        attendance === "yes"
            ? `Thank you, ${name}! We are excited to see you!`
            : `Thank you for letting us know, ${name}.`;

    document.getElementById("confirmation").textContent = msg;

    this.reset();
});
/* ============================================================
   Apple-style Smooth Scrolling for Navigation
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        // Apple-like smooth scroll animation
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


