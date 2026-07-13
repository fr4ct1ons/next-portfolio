import React from 'react'

function SnowForest() {
    return (
      <main>
          <h1>A Snowy Morning in Unreal</h1>

        <iframe className="ytVideo" 
        src="https://www.youtube.com/embed/-kOMp8spJ4Q?si=Ag_G4tdVjqI6EpZ" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>

          <p>I've been playing Forza Horizon 6 recently, and just like in Forza Horizon 4, I was marveled by the snowy landscape. For this reason, I made a snowy landscape in Unreal + a dynamic snow material, using Niagara for offsetting the snow. I could've done this with textures only and it'd be more efficient, but it's a lot faster with Niagara and SceneCaptures so that's what I went with.</p>
          <p>I did not create the 3D models on this project; All I created was the lighting setup and the reactive snow. Here are some links if you want to check the original assets:</p>

          <p>Winter Forest by Artem Raevskii: <a href='https://www.fab.com/listings/80b0f7d0-6f6e-4649-aa2c-e4096b91dbd3'>https://www.fab.com/listings/80b0f7d0-6f6e-4649-aa2c-e4096b91dbd3</a></p>

          <p>Winter House by Orpind: <a href='https://www.fab.com/listings/735765fc-1b87-4f49-9b7f-eee386e5e59f'>https://www.fab.com/listings/735765fc-1b87-4f49-9b7f-eee386e5e59f</a></p>

          <p>Snow 004 by AmbientCG: <a href='https://ambientcg.com/view?id=Snow004'>https://ambientcg.com/view?id=Snow004</a></p>

          <p>As mentioned before, the snow is fully reactive to the player's movement, leaving tracks as the player walks around. I made it with a SceneCapture2D and Niagara systems. The SceneComponent2D renders <b>only</b> the Niagara systems and nothing else, with the depth on the A channel. The video below shows a bit more the particles.</p>

          <iframe className="ytVideo" 
          src="https://www.youtube.com/embed/rqsax8DQxjc?si=026JkyZEaofNULC_" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>

          <p>For more screenshots, check out the project on <a href='https://www.artstation.com/artwork/ndwagK'>ArtStation</a>, and for the demo, check the <a href='https://fr4ct1ons.itch.io/a-snowy-morning-in-unreal'>Itch.io</a> page.</p>

      </main>
    )
}

export default SnowForest