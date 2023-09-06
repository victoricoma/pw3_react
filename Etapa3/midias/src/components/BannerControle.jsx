import banner2 from '../assets/img/2.png'

const BannerControle = () => {
    const w=600, h=240
    return(
        <div>
            <img src={banner2} alt="Banner de Promoção 2" width={w} height={h}/>
        </div>
    )

}
export default BannerControle;