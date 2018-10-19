window.requestAnimFrame = (function(callback)
{
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback)
    {
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.onresize = Resize;

function Resize()
{
	var canvas = getCanvas();
	canvas.width = CanvasWidth;
	canvas.height = CanvasHeight;
}

// Properties =====================================================================================================================
function getContext(){return getCanvas().getContext('2d');}
function getCanvas(){return document.getElementById('UsersCanvas');}

// Fields =========================================================================================================================
const GridMode = false;
const RenderMode = true;

const CanvasWidth  = getCanvas().clientWidth;
const CanvasHeight = getCanvas().clientHeight;

// BOOT ===========================================================================================================================
function InitializeBubbleAnimation(data)
{
	Initialize(data);
}
 
function Animate()
{
	ClearCanvas();
	Update();
	if(GridMode)
	{
		RenderGrids();
	}
	if(RenderMode)
	{
		RenderAnimation();
	}

	// request new frame
	setTimeout(function() {
        Animate();
    }, 10);
}

// ANIMATION METHODS ===============================================================================================================
function ClearCanvas()
{
	getContext().clearRect(0, 0, getCanvas().width, getCanvas().height);
}

// request new frame
setTimeout(function() {
	Animate();
}, 10);