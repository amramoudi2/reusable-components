import "./index.css";
import Badge from "./components/badge.jsx";
import Banner from "./components/banner.jsx";
import bannersData from "./data/bannersData.js";
import Card from "./components/cardComponent/index.jsx"
import cardImg from "./assets/Cloudupload.png"
import Testimo from "./components/testimonial/index.jsx";
import testimoImg from "./assets/lil.jpg"
import logoImg from "./assets/logo.png"
import badgesData from "./data/badges.js"

export default function App(){

    const badges = badgesData.map(badge => {
        return <Badge key={badge.setBackGround} uppercase={badge.uppercase} setBackGround={badge.setBackGround} withBorder={badge.withBorder}>{badge.childe}</Badge>
    })

    const banners = bannersData.map((banner)=>{
        return <Banner key={banner.text} color={banner.color} text={banner.text} para={banner.para} maxDisplayWidth={banner.maxDisplayWidth}/>
    })


    return(
        <>
            <div className="badges">
                {badges}
            </div>
            <hr/>
            <div className="banners">
                {banners}
            </div>
            <hr/>
            <div className="card">
                <Card>
                    <Card.Photo img={cardImg} />
                    <Card.Header>
                        Easy Development
                    </Card.Header>
                    <Card.Description>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi
                        lobortis.
                    </Card.Description>
                </Card>
            </div>
            <hr/>

            <div className="testos">
                <Testimo>
                    <Testimo.Img img={testimoImg}/>
                    <Testimo.Content>
                        <Testimo.Paragraph>
                            Mr. Whiskers, the sharp-dressed feline CEO of WorkCation Inc., ran the most successful tuna company in the world. With a sharp eye for business and an even sharper nose for quality fish.
                        </Testimo.Paragraph>
                        <Testimo.Info name="Mr. Whiskers" position="CEO of WorkCation"/>
                    </Testimo.Content>
                </Testimo>
            </div>

            <div className="testos">
                <Testimo color={"#f9fafb"}>
                    <Testimo.Img logo={logoImg}></Testimo.Img>
                    <Testimo.Paragraph textColor={"#111827"}>
                        Mr. Whiskers, the sharp-dressed feline CEO of WorkCation Inc., ran the most successful tuna company in the world. With a sharp eye for business and an even sharper nose for quality fish.
                    </Testimo.Paragraph>
                    <Testimo.Info name={"Mr. Whiskers"} position={"CEO of WhiskerTuna"}/>
                </Testimo>
            </div>

        </>
    )
}