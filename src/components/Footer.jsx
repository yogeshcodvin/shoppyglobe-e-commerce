import "../utils/Footer.css"; 

function Footer() {
    return (
    <footer className="footer">
    <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
    </footer>
);
}

export default Footer;
