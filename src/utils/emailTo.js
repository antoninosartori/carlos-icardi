const emailTo = (to, subject) => {
    const mailtoURL = `mailto:${to}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoURL);
}

export { emailTo }