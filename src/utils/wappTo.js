const wappTo = (to, message) => {
    const whatsappURL = `https://wa.me/${to}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL);
}

export { wappTo }