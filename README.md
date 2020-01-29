## Star Power :sparkles:

#### If this guide helps please star :star: the repo.

<br />

# React-360-Venues

## Tech Stack:
> Check out my other tech stacks [here](https://stackshare.io/Mary-Tyler-Moore)
<img src="https://github.com/Mary-Tyler-Moore/React-360-Venues/blob/master/React360-Netlify.png?raw=true" width="1000px" />

`React-360-Venues` provide two example ways to place hotspots, which you can switch by setting 
`useDynamicSurface` to true/false in `index.html`
1. Use dynamic surface: (`useDynamicSurface = true`):
   - This is recommended for most case, it has less limitation and allow you to place hotspots on any position(e.g. on the top or bottom). From performance wise, less than 8 hotspots per scene should works fine on mobile.
   - Each hotspot will be rendered on a different surface, and surface will be place on the right position dynamically by the hotspot setting.
   - You don't need to care about the creating, destroying, placing the surface. TourHotspot uses a custom native view "WorkInProgressSurface", which allow you to create and rotate a surface from react side by using this view.
   - "RCTWorkInProgressSurface" provides a custom native view to create a surface and place it in 3D space from react side.
2. Use one cylinder surface: (`useDynamicSurface = false`)
   - If all of you hotspots are in the place that a cylinder surface can cover, and you want simpler layout logic of hotspots that just maps position from 2D space of cylinder layer to the world. You can try this way.
   - It has two limitation: 1. You can't place a hotspot outside of the edge of the cylinder surface, otherwise it will be cropped. 2. There's an edge of cylinder surface on the back, if a hotspot is placed across the edge, it will also get cropped. (This template solves this by placing tooltip of a hotspot on the left if it's close to right edge).
   - It uses the translation on X direction on cylinder layer space to map hotspots' rotation to 3D space.
   - If you want to go with this way, you can remove the `RCTWorkInProgressSurface` and `WorkInProgressSurface` related codes.

## Author's Environmental Impact Statement:

#### I am seeking a job as a remote Frontend Developer. My dream is to stop driving my car :car: to the office :office: everyday. Please help me become a more carbon :deciduous_tree: neutral :recycle: JS dev by sharing your star power :sparkles: with me.
