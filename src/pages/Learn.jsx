import React from 'react'

const Learn = () => {
  return (
    <>
        <section className="hero flex item-end" style={{height : 456}}>
            <div className="container mx-auto flex items-end py-8">
                <h1 className="big-display uppercase">
                    Learn with Omayoza
                </h1>
            </div>
        </section>

        <section className="container mx-auto py-8">
            <h6 className="heading-six mb-8">
                Watch videos to learn more forex investing
            </h6>

            {/* <div className="videos flex mt-10 justify-center gap-x-6"> */}
            <div className="videos mb-8 grid grid-cols-1 md:grid-cols-4 md:grid-flow-col gap-4">
                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
            </div>

            <div className="videos mb-8 grid grid-cols-1 md:grid-cols-4 md:grid-flow-col gap-4">
                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="single-video">
                    <iframe width="290" height="auto" src="https://www.youtube.com/embed/IwK_T0sufzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Learn