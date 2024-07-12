import "./videos.css"
import Card from "../Card/Card.jsx"
import { useContext, useState, useEffect } from "react"
import { VideoContext } from "../../VideoContext.jsx"

const Videos = (props) => {
    const { videos } = useContext(VideoContext)
    const [videosPorExpansion, setVideosPorExpancion] = useState([])


    useEffect(() => {
       // console.log('Videos have changed:', videos)

        const agrupadosPorExpansion = videos.reduce((acc, video) => {
            const { expansion } = video
            if (!acc[expansion]) {
                acc[expansion] = []
            }
            acc[expansion].push(video)
            return acc
        }, {})
        // console.log(agrupadosPorExpansion)
        const entries = Object.entries(agrupadosPorExpansion)
        // console.log(entries)  

        const newVideosPorExpansion = Object.entries(agrupadosPorExpansion)
        // console.log('Grouped videos:', newVideosPorExpansion)

        if (JSON.stringify(videosPorExpansion) !== JSON.stringify(newVideosPorExpansion)) {
            setVideosPorExpancion(newVideosPorExpansion)
        }
    }, [videos])

    // console.log('Rendering Videos component with videosPorExpansion:', videosPorExpansion)

    return (
        <section className="container__videos">
            {videosPorExpansion.map(([expansion, videos]) => (
                <div key={expansion}>
                    <h3 className="titulo__videos">{expansion}</h3>
                    <div className="video">
                        {videos.map((video) => (
                            <Card {...video} key={video.id} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Videos




