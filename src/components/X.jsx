export default function X({toggleMenu, attivaMenu}) {
    return (
        <>
            <div onClick={toggleMenu} className={attivaMenu ? 'x rotate-45' : 'x'}>
                <hr className={`x_l  ${attivaMenu ? 'border-black bg-black' : 'border-white bg-white'}`}></hr>
                <hr className={`x_r ${attivaMenu ? 'border-black bg-black' : 'border-white bg-white'}`}></hr>
            </div>
        </>
    )
}