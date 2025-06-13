export default function BtnSocial({ children }) {
    return (

        <div className="box_btn_social">
            <button className="btn_social overflow-hidden reveal">
                <a href="#">{children}</a>
            </button>
        </div>

    )
}