import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({channel, description, song}) {
    return (
        <div className= "videoFooter">
            <div className= "videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className= "videoFooter__ticker">
                    <MusicNoteIcon className= "videoFooter__icon"/>
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>

            </div>
            <img className= "videoFooter__record"
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPkFydGJvYXJkIDQ2QDV4PC90aXRsZT48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI1Ij48L2NpcmNsZT48cGF0aCBkPSJNNDAsN0EzMywzMywwLDEsMCw3Myw0MCwzMywzMywwLDAsMCw0MCw3Wk01Niw0MGExLDEsMCwwLDEsMiwwQTE4LDE4LDAsMCwxLDQwLDU4YTEsMSwwLDAsMSwwLTJBMTYsMTYsMCwwLDAsNTYsNDBaTTE2LDQxYTEsMSwwLDAsMS0xLTFBMjUsMjUsMCwwLDEsNDAsMTVhMSwxLDAsMCwxLDAsMkEyMywyMywwLDAsMCwxNyw0MCwxLDEsMCwwLDEsMTYsNDFabTguMDUtMWExLDEsMCwwLDEtMiwwQTE4LDE4LDAsMCwxLDQwLDIyLjA1YTEsMSwwLDAsMSwwLDJBMTYsMTYsMCwwLDAsMjQuMDUsNDBabTUuNDQsMEExMC41MSwxMC41MSwwLDEsMSw0MCw1MC41MSwxMC41MywxMC41MywwLDAsMSwyOS40OSw0MFpNNDAsNjVhMSwxLDAsMCwxLDAtMkEyMywyMywwLDAsMCw2Myw0MGExLDEsMCwwLDEsMiwwQTI1LDI1LDAsMCwxLDQwLDY1WiI+PC9wYXRoPjwvc3ZnPg=="
            alt=""></img>
            
        </div>
    )
}

export default VideoFooter
