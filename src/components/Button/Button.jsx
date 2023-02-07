import { ReactComponent as ImgDownload } from 'assets/download-svgrepo-com.svg';

function Button({onClick}) {
    return (
        <button onClick={onClick}type="button" style={{padding:'30px'} }>
            <ImgDownload src="" alt="" style={{width:'30px', height:'30px'} } />
        </button>
    )
}
export default Button;