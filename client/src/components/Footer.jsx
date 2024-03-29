import { IoHeart } from "react-icons/io5";

function Footer() {
    return(
        <footer style={{
            textAlign: "center",
            textJustify: "auto",
            fontSize: "3em",
        }}>
            <div>
                <b>made with love <IoHeart /></b>
            </div>
        </footer>
    );
}

export default Footer;