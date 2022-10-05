const Banner = ({ imgSrc, imgAlt, title }) => {
    if (imgSrc && imgAlt) {
        return (
            <div className='bg-dark' style={{height: 300, width: "100%", objectFit: 'cover' }} >
                <img src={imgSrc} alt={imgAlt} style={{ height: 300, width: "100%", objectFit: 'cover' }} />
            </div>
        )
    }
    else
        return (
            <div className='d-flex flex-column align-items-center justify-content-center text-white bg-primary shadow' style={{ letterSpacing: 5, height: 175, width: "100%", objectFit: 'cover' }} >
                <div className='mb-2 text-uppercase display-3 fw-bold'>{title}</div>
                <div className='bg-white' style={{ width: "5%", height: 5}}></div>
            </div>
        )
}

export default Banner