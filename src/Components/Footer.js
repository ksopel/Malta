import "../scss/footer.scss"


function Footer (){
    return (
        <footer className="container-fluid bg-dark variant-dark pt-4 pb-2 px-5 ">
            <div className="d-flex justify-content-between">
                <p className="p__footer">Author: Kasia Sopel</p>
                <p ><a className="p__footer" href="mailto:katarzyna.sopel@outlook.com">katarzyna.sopel@outlook.com</a></p>
            </div>
        </footer>
    )
}

export default Footer;